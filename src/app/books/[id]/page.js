import { getBookDetails } from "@/utils/OpenLibraryApi";
import BookDetails from "@/components/BookDetails";
import AddBookButton from "@/components/AddBookButton";

export default async function BookDetailsPage({ params }) {
  const book = await getBookDetails(params.id);

  return (
    <div>
      <BookDetails book={book} />
      <AddBookButton book={book} />
    </div>
  );
}
