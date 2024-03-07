import AddBookToDatabase from "./AddBookToDatabase";

export default async function AddBookToLibrary(book) {
  try {
    await AddBookToDatabase(book);
    console.log("Book added to library successfully!");
  } catch (error) {
    console.error("Error adding book to library:", error);
    throw error;
  }
}
