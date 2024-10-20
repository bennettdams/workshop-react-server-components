import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "01 Intro",
  description: "01 Intro",
};

export default function Home() {
  return (
    <div className="">
      <PageHeader>Home</PageHeader>
    </div>
  );
}
