import { sql } from "@vercel/postgres";

export default async function addBookToDatabase(book) {
  try {
    // Check if the book already exists in the database
    const existingBook = await sql`
      SELECT * FROM books WHERE api_key = ${book.key}
    `;

    if (existingBook.rows.length > 0) {
      console.log(`Book with key ${book.key} already exists in the database.`);
      return;
    }

    // Insert the book if it doesn't exist
    await sql`
      INSERT INTO books (
        api_key,
        title,
        author_name,
        cover_image_url,
        publishers,
        publish_date,
        number_of_pages,
        isbn
      ) VALUES (
        ${book.key},
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
  }
}
