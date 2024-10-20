"use client";

import { type ReactNode, useState } from "react";
import { Button } from "./ui/button";

export function Counter({
  slot,
  children,
}: {
  slot?: ReactNode;
  children?: ReactNode;
}): JSX.Element {
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
