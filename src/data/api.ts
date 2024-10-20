import { unstable_noStore } from "next/cache";

export type ApiUser = {
  id: string;
  name: string;
};

export async function fetchUsers(): Promise<ApiUser[]> {
  unstable_noStore();
  await new Promise((r) => setTimeout(r, 2_000));

  return [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: `Random: ${Math.random()}` },
  ];
}

export async function fetchCount(): Promise<number> {
  unstable_noStore();
  await new Promise((r) => setTimeout(r, 2_000));

  return 7;
}
