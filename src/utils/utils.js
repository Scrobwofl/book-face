"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function handleDelete(id) {
  await sql`DELETE FROM books WHERE id=${id}`;
  revalidatePath("/books");
}

export async function handleUpdate(values, id) {
  await sql`UPDATE books SET ${values} WHERE id=${id}`;
  revalidatePath(`/books/${id}`);
}

export async function getGenres() {
  const genres = (await sql`SELECT * from genres`).rows;
  return genres;
}
