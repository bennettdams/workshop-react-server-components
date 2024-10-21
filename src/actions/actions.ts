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
