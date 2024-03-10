"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BookDetailsLayout from "./BookDetailsLayout";
import AddBookButton from "./buttons/AddBookButton";
import getBookDetails from "@/utils/openLibraryApi";

export default function BookDetails({ bookId, fetchFromAPI }) {
  const [fullBookDetails, setFullBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (fetchFromAPI) {
        try {
          const details = await getBookDetails(bookId);
          setFullBookDetails(details);
        } catch (error) {
          console.error("Error fetching book details:", error);
        }
      } else {
        setFullBookDetails(book);
      }
    };
    fetchBookDetails();
  }, [bookId, fetchFromAPI]);

  if (!fullBookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <BookDetailsLayout>
      <div className="p-4 flex flex-col md:flex-row md:items-start md:justify-center">
        {fullBookDetails.covers && fullBookDetails.covers.length > 0 && (
          <div className="md:w-1/2 md:pr-8 flex justify-center">
            <Image
              src={`https://covers.openlibrary.org/b/id/${fullBookDetails.covers[0]}-L.jpg`}
              width={300}
              height={300}
              className="rounded-xl border-2 border-yellow-500 border-opacity-100 border-solid"
              alt={`${fullBookDetails.title} book cover`}
              unoptimized
            />
          </div>
        )}
        <div className="md:w-1/2">
          <h2 className="text-2xl p-2 text-yellow-600 font-bold">
            {fullBookDetails.title}
          </h2>
          <p className="font-medium italic">{fullBookDetails.authors}</p>
          {fullBookDetails.description && (
            <p className="mb-2">{fullBookDetails.description}</p>
          )}
        </div>
      </div>
      <AddBookButton book={fullBookDetails} />
    </BookDetailsLayout>
  );
}
