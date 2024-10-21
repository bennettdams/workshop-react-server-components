"use server";

import { type ApiTodo, db } from "@/data/api";
import { revalidatePath } from "next/cache";

export async function addTodoAction(todoNew: ApiTodo): Promise<ApiTodo[]> {
  console.log("❎ Called: addTodo | todoNew:", todoNew);
  await new Promise((r) => setTimeout(r, 200));

  db.todos = [...db.todos, todoNew];

  revalidatePath("/04-server-functions");

  return db.todos;
}

export async function addTodoActionForForm(
  prevState: ApiTodo[],
  formData: FormData,
): Promise<ApiTodo[]> {
  console.log("❎ Called: addTodoActionForForm:");
  console.log("Prev state:", prevState);
  console.log("Form data:", formData);
  console.log("Input text:", formData.get("my-input"));

  await new Promise((r) => setTimeout(r, 200));

  const inputText = formData.get("my-input");

  if (!inputText || typeof inputText !== "string")
    throw new Error("Missing input text");

  db.todos = [...db.todos, { id: Math.random().toString(), text: inputText }];

  revalidatePath("/04-server-functions");

  return db.todos;
}
