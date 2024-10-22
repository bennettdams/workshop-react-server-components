"use server";

// ######### All exported functions in this file will automatically be available as endpoints publicly.

import { type TodoFromDB, db } from "@/data/api";
import { revalidatePath } from "next/cache";

export async function addTodoAction(
  todoNew: TodoFromDB,
): Promise<TodoFromDB[]> {
  console.log("❎ Called: addTodo | todoNew:", todoNew);
  await new Promise((r) => setTimeout(r, 200));

  db.todos = [...db.todos, todoNew];

  revalidatePath("/04-server-functions");

  return db.todos;
}

type FormState =
  | {
      status: "ok";
      data: TodoFromDB[];
      error: null;
    }
  | {
      status: "error";
      data: null;
      error: string;
    };

export async function addTodoActionForForm(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
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

  if (Math.random() > 0.5) {
    return { status: "ok", data: db.todos, error: null };
  } else {
    return { status: "error", data: null, error: "Something went wrong" };
  }
}
