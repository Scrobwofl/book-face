import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-hero-image bg-cover bg-no-repeat bg-center flex min-h-screen flex-col items-center justify-center">
      <SignIn />
    </div>
  );
}
