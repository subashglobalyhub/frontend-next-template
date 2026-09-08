import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Pramana",
};

// The original site presented these as illustrated quote cards (image files
// under wp-content/uploads/2017/07/), but those specific images were never
// independently captured by the Wayback Machine, so the graphics themselves
// could not be recovered. The titles below are the exact, verified text of
// each archived post — reproduced verbatim rather than reconstructed.
const quotes = [
  {
    text: "Luxury is in carving internal virtues",
    href: "https://web.archive.org/web/20190622233905/http://www.shivapuribaba.org/luxury-carving-internal-virtues/",
  },
  {
    text: "Be Occupied in Necessary Things",
    href: "https://web.archive.org/web/20190708195808/http://www.shivapuribaba.org/occupied-necessary-things/",
  },
  {
    text: "Duty First",
    href: "https://web.archive.org/web/20190627200115/http://www.shivapuribaba.org/duty-first/",
  },
  {
    text: "Only Realised Masters Could Lead",
    href: "https://web.archive.org/web/20190710003547/http://www.shivapuribaba.org/realised-masters-lead/",
  },
  {
    text: "Try To Find Source",
    href: "https://web.archive.org/web/20190625172815/http://www.shivapuribaba.org/try-find-source/",
  },
  {
    text: "Practicing Swadharma is Real Blessing",
    href: "https://web.archive.org/web/20190709231037/http://www.shivapuribaba.org/practicing-swadharma-real-blessing/",
  },
  {
    text: "Relevant inner inquisitiveness is necessary",
    href: "https://web.archive.org/web/20190627214149/http://www.shivapuribaba.org/relevant-inner-inquisitiveness-necessary/",
  },
  {
    text: "Guru’s teachings to follow is more important",
    href: "https://web.archive.org/web/20190708231010/http://www.shivapuribaba.org/gurus-teachings-to-follow-is-more-important/",
  },
];

export default function PramanaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <PageHeading>Pramana</PageHeading>
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-sm text-muted-foreground">
        <em>Pramana</em> — testimony offered as evidence. Short teachings of Shivapuri Baba, held up
        for reflection.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {quotes.map((quote, i) => (
          <a
            key={quote.text}
            href={quote.href}
            target="_blank"
            rel="noreferrer noopener"
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-in fade-in-0 slide-in-from-bottom-3 group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <span className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <Quote className="mb-4 size-7 shrink-0 fill-primary/15 text-primary" />
            <p className="font-accent text-xl leading-snug text-foreground sm:text-2xl">
              {quote.text}
            </p>
            <p className="mt-5 text-xs font-medium tracking-wide text-muted-foreground">
              — Shivapuri Baba
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
