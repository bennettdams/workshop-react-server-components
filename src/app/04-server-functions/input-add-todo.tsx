"use client";

import { addTodoAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodoFromDB } from "@/data/api";
import { useOptimistic, useState, useTransition } from "react";

export function InputAddTodo({ todos }: { todos: TodoFromDB[] }) {
  const [inputText, setInputText] = useState("");
  const [isPending, startTransition] = useTransition();

  const [todosOptimistic, setTodosOptimistic] = useOptimistic(todos);

  return (
    <div>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Some text.."
      />

      <Button
        className="mt-2"
        onClick={async () => {
          const todoNew: TodoFromDB = {
            id: Math.random().toString(),
            text: inputText,
          };
          startTransition(async () => {
            setTodosOptimistic((prev) => [...prev, todoNew]);

            await addTodoAction(todoNew);

            setInputText("");
          });
        }}
      >
        {isPending ? "Loading.." : "Add"}
        {/* <span>Add</span> */}
      </Button>

      <div className="mt-4">
        <h3>Optimistic:</h3>
        <ul>
          {todosOptimistic.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
