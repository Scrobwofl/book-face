import "dotenv/config";
import { sql } from "@vercel/postgres";

// Demonstrate connection to database
async function getPosts() {
  const test = await sql`
  SELECT * FROM test;
`;
  console.log("test is ", test);
}
getPosts();
