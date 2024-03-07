import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Face",
  description: "A social media site for book lovers.",
};

export default function RootLayout({ children, test }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {test}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
