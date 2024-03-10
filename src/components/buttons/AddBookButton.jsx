"use client";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import addBookToLibrary from "@/utils/addBookToLibrary";
import { handleDelete } from "@/utils/addBookToLibrary";
import BookStatus from "../BookStatus";

export default function AddBookButton({ book, userId }) {
  const router = useRouter();
  const { pending } = useFormStatus();

  const handleAddBook = async () => {
    try {
      await addBookToLibrary(book, userId);
      router.refresh();
    } catch (error) {
      console.error("Error adding book to library:", error);
    }
  };

  const handleRemoveBook = async () => {
    try {
      await handleDelete(book.id, userId);
      router.refresh();
    } catch (error) {
      console.error("Error removing book from library:", error);
    }
  };

  const isBookInLibrary = book.users?.includes(userId);

  return (
    <button
      disabled={pending}
      onClick={isBookInLibrary ? handleRemoveBook : handleAddBook}
      type="submit"
      className={`p-5 text-black rounded-xl m-5 ${
        isBookInLibrary ? "bg-gray-500" : "bg-yellow-500"
      }`}
    >
      {pending
        ? `${isBookInLibrary ? "Removing" : "Adding"} Book...`
        : isBookInLibrary
        ? "Remove from Library"
        : "Add Book to Library"}
    </button>
  );
}
