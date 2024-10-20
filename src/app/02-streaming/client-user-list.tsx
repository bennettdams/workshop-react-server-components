import { ApiUser } from "@/data/api";
import { use } from "react";

export function UserListPromise({
  userListPromise,
}: {
  userListPromise: Promise<ApiUser[]>;
}) {
  console.log("UserListPromise", userListPromise);
  const users = use(userListPromise);

  return (
    <div>
      <p>User list (promise):</p>

      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
