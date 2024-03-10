"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function handleDelete(bookId, userId) {
  try {
    await sql`
      DELETE FROM user_books
      WHERE book_id = ${bookId} AND user_id = ${userId}
    `;
    console.log("Book deleted successfully");
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
}

export async function handleUpdate(values, book_id) {
  await sql`UPDATE books SET ${values} WHERE book_id=${book_id}`;
  revalidatePath(`/books/${book_id}`);
}
