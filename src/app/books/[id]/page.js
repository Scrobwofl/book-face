import { getBookDetails } from "@/utils/openLibraryApi";
import BookDetails from "@/components/BookDetails";

export default async function BookDetailsPage({ params }) {
  const book = await getBookDetails(params.id);

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
}
