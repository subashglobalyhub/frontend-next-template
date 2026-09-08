import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Published Article",
};

export default function PublishedArticlePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeading>Published Article</PageHeading>
      <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No articles have been published in this section yet.
      </div>
    </div>
  );
}
