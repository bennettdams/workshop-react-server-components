import { fetchTodos } from "@/data/api";
import { Now } from "./now";

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

      {/* <InputAddTodo /> */}
    </div>
  );
}
