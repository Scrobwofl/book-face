"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ thing }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-amber-400 m-8 rounded-md p-3"
    >
      {pending ? `Adding ${thing}...` : `Add ${thing}`}
    </button>
  );
}
