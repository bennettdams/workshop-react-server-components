"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function RefreshPageButton() {
  const router = useRouter();

  return (
    <Button className="w-min" onClick={() => router.refresh()}>
      Refresh page
    </Button>
  );
}
