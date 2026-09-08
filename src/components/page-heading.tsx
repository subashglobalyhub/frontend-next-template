import { SectionDivider } from "@/components/section-divider";

export function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{children}</h1>
      <SectionDivider className="mt-5" />
    </div>
  );
}
