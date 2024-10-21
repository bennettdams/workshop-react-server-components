"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export function RefreshPageButton() {
  const router = useRouter();
  const [clickedAt, setClickedAt] = useState<Date | null>(null);

  return (
    <div>
      <Button
        className="w-min"
        onClick={() => {
          setClickedAt(new Date());
          router.refresh();
        }}
      >
        Refresh page
      </Button>

      <p className="mt-2">Clicked at: {clickedAt?.toISOString() ?? "-"}</p>
    </div>
  );
}
