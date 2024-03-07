"use client";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import addBookToLibrary from "@/utils/addddBookToLibrary";

export default function AddBookButton({ book }) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const handleAddBook = async () => {
    try {
      console.log("clicked");
      console.log(book);
      await addBookToLibrary(book);
      console.log("Book added to library successfully!");
      router.refresh(); // Refresh the current route
    } catch (error) {
      console.error("Error adding book to library:", error);
    }
  };

  return (
    <button
      disabled={pending}
      onClick={handleAddBook}
      type="submit"
      className="p-5 bg-yellow-500 text-black rounded-xl m-5"
    >
      {pending ? `Adding Book...` : `Add Book to Library`}
    </button>
  );
}
