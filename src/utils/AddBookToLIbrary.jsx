import { sql } from "@vercel/postgres";
import { getSession } from "@clerk/nextjs/server";

export async function AddBookToLibrary(book) {
  const { userId } = await getSession(); // Get current user id
  await sql`
    INSERT INTO books (book_id, title, author, cover_image_url, description, publishers, publish_date, number_of_pages, isbn)
    VALUES (${book.title}, ${book.author_name}, ${book.cover_image_url}, ${book.description}, ${book.publishers}, ${book.publish_date}, ${book.number_of_pages}, ${book.isbn})
  `;
}
