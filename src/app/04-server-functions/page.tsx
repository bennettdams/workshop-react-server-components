import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";
import { RefreshPageButton } from "@/components/refresh-page-button";
import { Todos } from "@/components/todos";
import { Suspense } from "react";
import { InputAddTodo } from "./input-add-todo";

export const dynamic = "force-dynamic";

// cURL

export default async function Page() {
  return (
    <div>
      <PageHeader>04 - Server Functions</PageHeader>

      <div className="space-y-10">
        <Now />

        <Suspense fallback="Loading todos..">
          <Todos />
        </Suspense>

        <InputAddTodo />

        <RefreshPageButton />
      </div>
    </div>
  );
}
