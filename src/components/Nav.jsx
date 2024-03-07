import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { FaHome } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdViewTimeline } from "react-icons/md";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="bg-gray-800 flex flex-row justify-start items-center">
      {/* <h1 className="mx-2 bg-yellow-600 text-center px-3 py-2 text-gray-900 rounded-xl">
        Book
        <br />
        Face
      </h1> */}
      <Image
        src="/bookface-logo.png"
        height="75"
        width="75"
        className="p-2"
        alt="Book face company logo"
        priority
      />

      <ol className="flex flex-row p-3">
        <li className="m-4 hover:text-yellow-600 flex flex-row items-center justify-center gap-2">
          <FaHome />
          <Link href="/">Home</Link>
        </li>
        <li className="m-4 hover:text-yellow-600 flex flex-row items-center justify-center gap-2">
          <IoLibrary />
          <Link href="/books">Library</Link>
        </li>
        <li className="m-4 hover:text-yellow-600 flex flex-row items-center justify-center gap-2">
          <MdViewTimeline />
          <Link href="/search">Search</Link>
        </li>
      </ol>
      <div className="absolute top-6 right-6">
        <UserButton />
      </div>
    </div>
  );
}
