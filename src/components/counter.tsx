"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function Counter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <p>
        Count: <span className="font-bold">{count}</span>
      </p>
      <div>
        <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
      </div>
    </div>
  );
}
