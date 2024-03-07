import { GetBookDetails } from "@/utils/OpenLibraryApi";
import BookDetails from "@/components/BookDetails";

export default async function BookDetailsPage({ params }) {
  const book = await GetBookDetails(params.id);

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
