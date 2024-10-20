import { fetchUsers } from "@/data/api";

export async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <p className="font-bold">Users:</p>

      <div>
        {users.map((user) => (
          <p key={user.id}>Name: {user.name}</p>
        ))}
      </div>
    </div>
  );
}
