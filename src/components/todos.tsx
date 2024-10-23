import { FormAddTodo } from "@/app/04-server-functions/form-add-todo";
import { InputAddTodo } from "@/app/04-server-functions/input-add-todo";
import { db, getTodosFromDB } from "@/data/api";
import { revalidatePath } from "next/cache";
import { Now } from "./now";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export async function Todos() {
  const todos = await getTodosFromDB();

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

        {/* Variant 1: Form from the server with inline Server Action */}
        <form
          action={async (formData) => {
            "use server";

            // don't forget validation (-> public endpoint & untrusted inputs)

            console.log("Form data:", formData);
            console.log("Input text:", formData.get("my-input"));

            const inputText = formData.get("my-input");

            if (!inputText || typeof inputText !== "string")
              throw new Error("Missing input text");

            db.todos = [
              ...db.todos,
              { id: Math.random().toString(), text: inputText },
            ];

            // trigger "reload" of Server Component
            revalidatePath("/04-server-functions");
          }}
        >
          <Input name="my-input" type="text" placeholder="Some text.." />
          <Button className="mt-2">Add</Button>
        </form>
      </div>

      {/* Variant 2: Form from the client with Server Action state */}
      <div className="mt-10">
        <p>Form (Client) with action state</p>

        <FormAddTodo todos={todos} />
      </div>

      {/* Variant 3: Input from the client with Server Action via manual transition */}
      <div className="mt-10">
        <p>Input (Client) with transition</p>

        <InputAddTodo todos={todos} />
      </div>
    </div>
  );
}
