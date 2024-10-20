import { Counter } from "@/components/counter";
import { Now } from "@/components/now";
import { PageHeader } from "@/components/page-header";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <PageHeader>01 - Introduction</PageHeader>

      <Now />

      <Counter />
    </div>
  );
}
