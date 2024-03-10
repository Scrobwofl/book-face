"use server";
import { sql } from "@vercel/postgres";

export default async function addBookToLibrary(book, userId) {
  try {
    // Insert the book if it doesn't exist
    const { rows: existingBooks } = await sql`
      INSERT INTO books (api_key, title, author_name, cover_image_url, description)
      VALUES (${book.key}, ${book.title}, ${book.authors}, ${book.covers[0]}, ${book.description})
      ON CONFLICT (api_key) DO NOTHING
      RETURNING book_id
    `;

    const bookId =
      existingBooks[0]?.book_id ||
      (await sql`SELECT book_id FROM books WHERE api_key = ${book.key}`).rows[0]
        .book_id;

    // Add the book to the user's library
    await sql`
      INSERT INTO user_books (user_id, book_id)
      VALUES (${userId}, ${bookId})
      ON CONFLICT (user_id, book_id) DO NOTHING
    `;
  } catch (error) {
    console.error("Error adding book to library:", error);
    throw error;
  }
}
