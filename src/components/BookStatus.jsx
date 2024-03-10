// components/BookStatus.jsx
"use client";
import { useUser } from "@clerk/nextjs";
import { sql } from "@vercel/postgres";

export default async function BookStatus({ bookId }) {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const { rows } = await sql`
    SELECT * FROM user_books
    WHERE user_id = ${user.id} AND book_id = ${bookId}
  `;

  return rows.length > 0;
}
