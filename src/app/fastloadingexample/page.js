import { SlowComponent } from "@/components/SlowComponent";
import { Suspense } from "react";
import PacmanLoader from "@/components/PacmanLoader";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<PacmanLoader />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
