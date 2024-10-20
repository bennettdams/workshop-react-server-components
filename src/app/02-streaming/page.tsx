import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";
import { UserList } from "@/components/user-list";
// import { Suspense } from "react";

export const dynamic = "force-dynamic";

// self.__next_f

export default async function Page() {
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

        <RefreshPageButton />
      </div>
    </div>
  );
}
