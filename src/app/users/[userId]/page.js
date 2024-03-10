// pages/users/[id].js
import { sql } from "@vercel/postgres";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default async function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  const { rows: userBooks } = await sql`
    SELECT books.*
    FROM books
    JOIN user_books ON books.book_id = user_books.book_id
    WHERE user_books.user_id = ${user.id}
  `;

  return (
    <div>
      <div className="flex items-center mb-4">
        {user.profileImageUrl && (
          <Image
            src={user.profileImageUrl}
            alt={user.username}
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p>{user.primaryEmailAddress.emailAddress}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{user.username}'s Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userBooks.map((book) => (
          <Link key={book.book_id} href={`/books/${book.api_key}`}>
            {book.cover_image_url && (
              <Image
                src={book.cover_image_url}
                alt={book.title}
                width={200}
                height={300}
                className="mx-auto"
              />
            )}
            <h3 className="text-lg font-bold">{book.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
