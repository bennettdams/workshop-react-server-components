import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";
import { UserList } from "@/components/user-list";
// import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Page() {
  // const userListPromise = fetchUsers();

  return (
    <div>
      <PageHeader>02 - Streaming</PageHeader>

      <div className="space-y-10">
        <Now />

        <div>
          {/* <Suspense fallback={"Loading users.."}> */}
          <UserList />
          {/* </Suspense> */}
        </div>

        {/* <Suspense fallback={"Load "}>
          <UserListPromise userListPromise={userListPromise} />
        </Suspense> */}

        <RefreshPageButton />
      </div>
    </div>
  );
}
