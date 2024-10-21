"use client";

import { addTodo } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export function InputAddTodo() {
  const [inputText, setInputText] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Some text.."
      />

      <Button
        onClick={async () => {
          startTransition(async () => {
            await addTodo({
              id: Math.random().toString(),
              text: inputText,
            });
            setInputText("");
          });
        }}
      >
        {isPending ? "Loading.." : "Add"}
        {/* <span>Add</span> */}
      </Button>
    </div>
  );
}
