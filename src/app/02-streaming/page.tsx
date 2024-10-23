import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";
import { UserList } from "@/components/user-list";
import { getUsersFromDB } from "@/data/api";
import { Suspense } from "react";
import { UserListPromise } from "./client-user-list";

export const dynamic = "force-dynamic";

export default async function Page() {
  const userListPromise = getUsersFromDB();

  return (
    <div>
      <PageHeader>02 - Streaming</PageHeader>

      <div className="space-y-10">
        <Now />

        <div>
          <Suspense fallback="1 Loading users..">
            <UserList fakeTime={2_000} />

            {/* <Suspense fallback="2 Loading users..">
              <UserList fakeTime={4_000} />
            </Suspense> */}
          </Suspense>
        </div>

        {/* <div>
          <Suspense fallback="Loading users.. 1 second">
            <UserList fakeTime={1_000} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback="Loading users.. 3 seconds">
            <UserList fakeTime={3_000} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback="Loading users.. 5 seconds">
            <UserList fakeTime={5_000} />
          </Suspense>
        </div> */}

        <Suspense fallback="Loading...">
          <UserListPromise userListPromise={userListPromise} />
        </Suspense>

        <RefreshPageButton />
      </div>
    </div>
  );
}
