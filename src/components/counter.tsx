"use client";

import { type ReactNode, useState } from "react";
import { Button } from "./ui/button";

export function Counter({
  // initialCount = 0,
  slot,
  children,
}: {
  // initialCount?: number;
  slot?: ReactNode;
  children?: ReactNode;
}) {
  // The initial count is for demonstration purposes only. It is not synced with props.
  // const [count, setCount] = useState(initialCount);
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <p>
        Count: <span className="font-bold">{count}</span>
      </p>

      <div>
        <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
      </div>

      {children && (
        <div>
          <p>Children:</p>
          <div>{children}</div>
        </div>
      )}

      {slot && (
        <div>
          <p>Slot:</p>
          <div>{slot}</div>
        </div>
      )}
    </div>
  );
}
