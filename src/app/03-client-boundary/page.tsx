import { Counter } from "@/components/counter";
import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";

export const dynamic = "force-dynamic";

// self.__next_f

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
          </Counter>
          
          <Counter
          slot={
            <div>
            <p>Hey from the server (slot)</p>
            </div>
            }
            /> */}

        {/* <Counter initialCount={count} /> */}

        <RefreshPageButton />
      </div>
    </div>
  );
}
