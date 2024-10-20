export type ApiUser = {
  id: string;
  name: string;
};

export async function fetchUsers(): Promise<ApiUser[]> {
  await new Promise((r) => setTimeout(r, 3_000));

  return [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
  ];
}

export async function fetchCount(): Promise<number> {
  await new Promise((r) => setTimeout(r, 2_000));

  return 7;
}
