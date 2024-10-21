"use client";

import { addTodoAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";

export function InputAddTodo() {
  const [inputText, setInputText] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <p>Form on the client</p>

      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Some text.."
      />

      <Button
        className="mt-2"
        onClick={async () => {
          startTransition(async () => {
            await addTodoAction({
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