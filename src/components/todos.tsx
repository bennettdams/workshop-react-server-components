import { FormAddTodo } from "@/app/04-server-functions/form-add-todo";
import { InputAddTodo } from "@/app/04-server-functions/input-add-todo";
import { db, fetchTodos } from "@/data/api";
import { revalidatePath } from "next/cache";
import { Now } from "./now";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export async function Todos() {
  const todos = await fetchTodos();

  return (
    <div>
      <p className="font-bold">TODOs:</p>

      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <Now />

      <div className="mt-10">
        <p>Form on the server</p>

        <form
          action={async (formData) => {
            "use server";
            console.log("Form data:", formData);
            console.log("Input text:", formData.get("my-input"));

            const inputText = formData.get("my-input");

            if (!inputText || typeof inputText !== "string")
              throw new Error("Missing input text");

            db.todos = [
              ...db.todos,
              { id: Math.random().toString(), text: inputText },
            ];

            revalidatePath("/04-server-functions");
          }}
        >
          <Input name="my-input" type="text" placeholder="Some text.." />
          <Button className="mt-2">Add</Button>
        </form>
      </div>

      <div className="mt-10">
        <p>Form (Client) with action state</p>

        <FormAddTodo todos={todos} />
      </div>

      <div className="mt-10">
        <p>Input (Client) with transition</p>

        <InputAddTodo todos={todos} />
      </div>
    </div>
  );
}
