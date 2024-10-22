import { getUsersFromDB } from "@/data/api";
import { Now } from "./now";

export async function UserList({ fakeTime }: { fakeTime?: number }) {
  const users = await getUsersFromDB(fakeTime);

  return (
    <div>
      <p className="font-bold">Users:</p>

      <ul className="list-disc">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Now />
    </div>
  );
}
