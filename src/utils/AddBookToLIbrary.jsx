import addBookToDatabase from "@/utils/addBookToDatabase";

export const addBookToLibrary = async (book) => {
  try {
    await addBookToDatabase(book);
    console.log("Book added to library successfully!");
  } catch (error) {
    console.error("Error adding book to library:", error);
    throw error;
  }
};
