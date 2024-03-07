import { sql } from "@vercel/postgres";

export default async function addBookToDatabase(book) {
  try {
    await sql`
      INSERT INTO books (
        title,
        author_name,
        cover_image_url,
        publishers,
        publish_date,
        number_of_pages,
        isbn
      ) VALUES (
        ${book.title || ""},
        ${book.author_name || ""},
        ${book.cover_image_url || ""},
        ${JSON.stringify(book.publishers || [])},
        ${book.publish_date || null},
        ${book.number_of_pages || null},
        ${JSON.stringify(book.isbn || [])}
      )
    `;
  } catch (error) {
    console.error("Error adding book to database:", error);
    throw error;
  }
}
