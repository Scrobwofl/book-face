"use client";

import Link from "next/link";
import Image from "next/image";

export default function SearchResults({ books }) {
  if (!Array.isArray(books) || books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <h2 className="text-xl text-yellow-500 my-5">Search Results:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Link
            key={book.key}
            href={`/books/${book.key}`}
            className="block p-4 border border-gray-200 hover:shadow-lg rounded-md mx-3"
          >
            {book.cover_i && (
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
                width={200}
                height={300}
                className="mx-auto"
              />
            )}
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>{book.author_name?.join(", ")}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
