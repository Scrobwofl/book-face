"use client";
import { handleDelete } from "@/utils/utils";
import { useFormStatus } from "react-dom";
import { useUser } from "@clerk/nextjs";

export default function DeleteButton({ book }) {
  const { pending } = useFormStatus();
  const { user } = useUser();

  const handleDeleteBook = async () => {
    if (!user) return;

    try {
      await handleDelete(book.book_id, user.id);
      // Refresh the page or update the UI as needed
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <button
      className="text-sm bg-gray-700 py-1 px-2 rounded-md text-red-600"
      onClick={handleDeleteBook}
      disabled={pending}
    >
      {pending ? "Deleting" : "Delete"}
    </button>
  );
}
