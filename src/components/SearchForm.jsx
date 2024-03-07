"use client";

import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl my-5 flex items-center justify-center gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="text-black p-2 rounded-xl"
      />
      <button type="submit" className="px-5 py-2 bg-gray-500 rounded-xl">
        Search
      </button>
    </form>
  );
}
