import { sql } from "@vercel/postgres";

export const addBookToDatabase = async (book) => {
  try {
    // Assuming you have a table named 'books' with columns corresponding to the book properties
    await sql`
      INSERT INTO books (
        title,
        author_name,
        cover_image_url,
        description,
        quote,
        publishers,
        publish_date,
        number_of_pages,
        isbn
      ) VALUES (
        ${book.title},
        ${book.author_name},
        ${book.cover_image_url},
        ${book.description},
        ${book.quote},
        ${JSON.stringify(book.publishers)},
        ${book.publish_date},
        ${book.number_of_pages},
        ${JSON.stringify(book.isbn)}
      )
    `;
  } catch (error) {
    console.error("Error adding book to database:", error);
    throw error;
  }
};
