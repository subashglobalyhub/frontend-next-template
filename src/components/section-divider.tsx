import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px w-10 bg-border sm:w-16" />
      <span className="size-1.5 rotate-45 bg-primary" />
      <span className="h-px w-10 bg-border sm:w-16" />
    </div>
  );
}
