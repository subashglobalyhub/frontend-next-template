import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Published Article",
};

export default function PublishedArticlePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-foreground">Published Article</h1>
      <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No articles have been published in this section yet.
      </div>
    </div>
  );
}
