"use client";

import Link from "next/link";

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
            key={book.cover_edition_key || book.key} // Add a unique key prop
            href={`/books/${book.cover_edition_key || book.key}`}
            className="block p-4 border border-gray-200 rounded hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>{book.author_name?.join(", ")}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
