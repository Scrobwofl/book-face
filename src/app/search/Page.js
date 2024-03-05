"use client";
import Link from "next/link";
import { useState } from "react";

export default function SearchForm() {
  const [currentQuery, setCurrentQuery] = useState("");
  const [books, setBooks] = useState([]);

  async function searchHandler(e) {
    e.preventDefault();
    try {
      const results = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          currentQuery
        )}&limit=10`
      );
      const data = await results.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={searchHandler}
        className="max-w-xl my-5 flex items-center justify-center gap-2"
      >
        <input
          type="text"
          value={currentQuery}
          onChange={(e) => setCurrentQuery(e.target.value)}
          placeholder="Search for books..."
          className="text-black p-2 rounded-xl"
        />
        <button type="submit" className="px-5 py-2 bg-gray-500 rounded-xl">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Link
            key={book.key}
            href={`/book/${book.key.replace("/works/", "")}`}
            className="block p-4 border border-gray-200 rounded hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>{book.author_name?.join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
