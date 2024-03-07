import addBookToDatabase from "@/utils/addBookToDatabase";

export default async function addBookToLibrary(book) {
  try {
    await addBookToDatabase(book);
    console.log("Book added to library successfully!");
  } catch (error) {
    console.error("Error adding book to library:", error);
    throw error;
  }
}
