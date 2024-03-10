"use server";

export default async function getBookDetails(bookId) {
  const bookResponse = await fetch(
    `https://openlibrary.org/works/${bookId}.json`
  );
  const bookData = await bookResponse.json();

  const authorPromises = bookData.authors.map(async (author) => {
    const authorResponse = await fetch(
      `https://openlibrary.org${author.author.key}.json`
    );
    const authorData = await authorResponse.json();
    return authorData.name;
  });

  const authorNames = await Promise.all(authorPromises);

  return {
    description: bookData.description?.value || "",
    title: bookData.title || "Unknown Title",
    covers: bookData.covers || [],
    key: bookData.key || "",
    authors: authorNames.join(", "),
  };
}
