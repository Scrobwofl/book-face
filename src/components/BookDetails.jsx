import Image from "next/image";
import BookDetailsLayout from "./BookDetailsLayout";
import AddBookButton from "./AddBookButton";

export default function BookDetails({ book }) {
  return (
    <BookDetailsLayout>
      <div className="p-4 flex flex-col md:flex-row md:items-start md:justify-center">
        {book.cover_image_url && (
          <div className="md:w-1/2 md:pr-8 flex justify-center">
            <Image
              src={book.cover_image_url}
              width={300}
              height={300}
              className="rounded-xl border-2 border-yellow-500 border-opacity-100 border-solid"
              alt={`${book.title} book cover`}
              unoptimized
            />
          </div>
        )}
        <div className="md:w-1/2">
          <h2 className="text-2xl p-2 text-yellow-600 font-bold">
            {book.title}
          </h2>
          <p className="font-medium italic">{book.author_name}</p>
          {book.publishers?.length > 0 && (
            <p className="mb-2">
              Published by{" "}
              {book.publishers.map((publisher) => publisher.name).join(", ")}
            </p>
          )}
          {book.publish_date && (
            <p className="mb-2">
              Published on {new Date(book.publish_date).toDateString()}
            </p>
          )}
          {book.number_of_pages && (
            <p className="mb-2">Number of pages: {book.number_of_pages}</p>
          )}
          {book.isbn.length > 0 && (
            <p className="mb-2">ISBN: {book.isbn.join(", ")}</p>
          )}
        </div>
      </div>
      <AddBookButton book={book} />
    </BookDetailsLayout>
  );
}
