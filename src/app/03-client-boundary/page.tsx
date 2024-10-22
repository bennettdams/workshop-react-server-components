import { Counter } from "@/components/counter";
import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";

export const dynamic = "force-dynamic";

export default async function Page() {
  // const count = await fetchCount();

  return (
    <div>
      <PageHeader>03 - Client boundary</PageHeader>

      <div className="space-y-10">
        <Now />

        <Counter />

        {/* <Counter>
          <p>Hey from the server (children) </p>
          <UserList />
        </Counter> */}

        {/* <Counter
          slot={
            <div>
              <p>Hey from the server (slot)</p>
              <UserList />
            </div>
          }
        /> */}

        {/* <Suspense fallback="Loading users..">
          <UserList />
        </Suspense> */}

        <RefreshPageButton />
      </div>
    </div>
  );
}
