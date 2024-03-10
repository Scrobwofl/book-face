import BookDetails from "@/components/BookDetails";

export default async function BookDetailsPage({ params }) {
  console.log(params);
  return (
    <div>
      <BookDetails bookId={params.id} fetchFromAPI={true} />
    </div>
  );
}
