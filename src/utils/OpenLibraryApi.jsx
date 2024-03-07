export default async function GetBookDetails(id) {
  const response = await fetch(`https://openlibrary.org/books/${id}.json`);
  const data = await response.json();

  return {
    title: data.title || "Unknown Title",
    author_name:
      data.authors && data.authors.length > 0
        ? data.authors.map((author) => author.name).join(", ")
        : "Unknown Author",
    cover_image_url: `https://covers.openlibrary.org/b/id/${data.covers?.[0]}-L.jpg`,
    publishers:
      data.publishers?.map((publisher) => ({
        name: publisher.name,
      })) || [],
    publish_date: data.publish_date || null,
    number_of_pages: data.number_of_pages || null,
    isbn: data.isbn?.map((isbn) => isbn.value) || [],
  };
}
