"use client";

import { addTodoActionForForm } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ApiTodo } from "@/data/api";
import { useActionState } from "react";

export function FormAddTodo({ todos }: { todos: ApiTodo[] }) {
  // When using useActionState, React will also automatically replay form submissions entered before hydration finishes. This means users can interact with the app even before the app has hydrated.
  const [formState, formAction, isPending] = useActionState(
    addTodoActionForForm,
    { status: "ok", data: todos, error: null },
  );

  return (
    <form action={formAction}>
      <Input name="my-input" type="text" placeholder="Some text.." />
      <Button className="mt-2">{isPending ? "Loading.." : "Add"}</Button>

      <p>Form state:</p>

      {formState.status === "error" ? (
        <pre>
          <p>Error: {formState.error}</p>
        </pre>
      ) : (
        formState.data.map((todo) => (
          <pre key={todo.id}>
            <p>
              {todo.id} - {todo.text}
            </p>
          </pre>
        ))
      )}
    </form>
  );
}
