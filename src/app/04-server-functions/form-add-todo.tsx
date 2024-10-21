"use client";

import { addTodoActionForForm } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ApiTodo } from "@/data/api";
import { useActionState } from "react";

export function FormAddTodo({ todos }: { todos: ApiTodo[] }) {
  const [formState, formAction, isPending] = useActionState(
    addTodoActionForForm,
    todos,
  );

  return (
    <form action={formAction}>
      <Input name="my-input" type="text" placeholder="Some text.." />
      <Button className="mt-2">{isPending ? "Loading.." : "Add"}</Button>

      <p>Form state:</p>

      {formState.map((todo) => (
        <pre key={todo.id}>
          <p>
            {todo.id} - {todo.text}
          </p>
        </pre>
      ))}
    </form>
  );
}
