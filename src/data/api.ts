import { unstable_noStore } from "next/cache";

export type TodoFromDB = {
  id: string;
  text: string;
};

const todosInitial: TodoFromDB[] = [
  { id: "1", text: "Learn React" },
  { id: "2", text: "Understand caching" },
  { id: "3", text: "Start woodworking" },
];

/** Fake database. This only works in dev, not for the built application. */
export const db: { todos: TodoFromDB[] } = {
  todos: todosInitial,
};

export async function getTodosFromDB(): Promise<TodoFromDB[]> {
  unstable_noStore();
  await new Promise((r) => setTimeout(r, 200));

  return db.todos;
}

export type UserFromDB = {
  id: string;
  name: string;
};

export async function getUsersFromDB(fakeTime = 2_000): Promise<UserFromDB[]> {
  unstable_noStore();
  await new Promise((r) => setTimeout(r, fakeTime));

  return [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: `Random: ${Math.random()}` },
    { id: "4", name: `Fetched at: ${new Date().toISOString()}` },
  ];
}

export async function getCountFromDB(): Promise<number> {
  unstable_noStore();
  await new Promise((r) => setTimeout(r, 2_000));

  return 7;
}
