"use client";

import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    try {
      console.log("Trying Search");
      const results = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          query
        )}&limit=10`
      );
      const data = await results.json();

      if (data.docs) {
        setBooks(data.docs);
        setHasSearched(true);
      } else {
        setBooks([]);
        setHasSearched(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-yellow-500 mt-3">Search for Books</h1>
      <SearchForm onSearch={handleSearch} />
      {hasSearched && <SearchResults books={books} />}
    </div>
  );
}
