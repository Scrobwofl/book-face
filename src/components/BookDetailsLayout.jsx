// components/BookDetailsLayout.jsx
import Image from "next/image";

export default function BookDetailsLayout({ children }) {
  return (
    <div className="bg-hero-image bg-cover bg-no-repeat bg-center flex min-h-screen flex-col items-center p-2 z-0 text-center ">
      <div className="flex flex-col max-w-xl items-center bg-gray-800 m-5 rounded-2xl ">
        {children}
      </div>
    </div>
  );
}
