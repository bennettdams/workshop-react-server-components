"use server";

import { type ApiTodo, db } from "@/data/api";
import { revalidatePath } from "next/cache";

export async function addTodo(todoNew: ApiTodo): Promise<ApiTodo[]> {
  console.log("❎ Called: addTodo");
  await new Promise((r) => setTimeout(r, 200));

  db.todos = [...db.todos, todoNew];

  revalidatePath("/04-server-functions");

  return db.todos;
}
