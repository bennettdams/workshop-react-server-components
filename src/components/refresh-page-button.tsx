"use client";

import { RefreshCcwIcon } from "lucide-react";
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
        <RefreshCcwIcon />
        <span>Refresh page</span>
      </Button>

      <p className="mt-2">Clicked at: {clickedAt?.toISOString() ?? "-"}</p>
    </div>
  );
}
