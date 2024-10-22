import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";
import { getUsersFromDB } from "@/data/api";

export const dynamic = "force-dynamic";

export default async function Page() {
  const users = await getUsersFromDB();

  return (
    <div>
      <PageHeader>01 - Intro</PageHeader>

      <div className="space-y-10">
        <Now />

        <div>
          <p className="font-bold">Users:</p>

          <div>
            {users.map((user) => (
              <p key={user.id}>Name: {user.name}</p>
            ))}
          </div>
        </div>

        <RefreshPageButton />
      </div>
    </div>
  );
}
