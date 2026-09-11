import type { Metadata } from "next";
import {
  Star,
  Moon,
  CalendarDays,
  MapPin,
  Sprout,
  TreePine,
  Flame,
  Landmark,
  Compass,
  Users,
  Mountain,
  Flower2,
} from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { SectionDivider } from "@/components/section-divider";
import { MapEmbed } from "@/components/map-embed";

export const metadata: Metadata = {
  title: "Timeline",
};

const astroFacts = [
  { icon: Star, label: "Nakshatra", value: "Mūla (मूल)" },
  { icon: Moon, label: "Hindu / Nepali Month", value: "Bhadra (भाद्र)" },
  { icon: CalendarDays, label: "Bikram Sambat Year", value: "1883 B.S." },
  { icon: CalendarDays, label: "Gregorian Year", value: "1826 A.D." },
];

const events: {
  icon: typeof Sprout;
  year: string;
  title: string;
  description: string;
  source: "site" | "research";
}[] = [
  {
    icon: Sprout,
    year: "1826 (Bhadra, B.S. 1883)",
    title: "Birth in Malabar, Kerala",
    description:
      "Born into a Nambudiri Brahmin family in Malabar, Kerala, South India, under Mūla Nakshatra. His grandfather, an astrologer, had once forecast that the family lineage would end — he was in fact born a twin, alongside a sister.",
    source: "site",
  },
  {
    icon: TreePine,
    year: "c. 1844 (age ~18)",
    title: "Renounces the world",
    description:
      "Having mastered all four Vedas by age 14, he made over his ancestral property to his twin sister and left home to join his grandfather Achyutam, who had taken to a hermit's life in the Amarkantak forest near the source of the Narmada river, Madhya Pradesh — in quest of the Truth.",
    source: "research",
  },
  {
    icon: Mountain,
    year: "September 1846",
    title: "First visit to Nepal",
    description:
      "Accompanied his grandfather to Nepal during Kot Parba — the palace massacre that brought the Rana regime to power. He visited Pashupatinath Temple and the Guhyakali Shaktipeetha before returning to India.",
    source: "site",
  },
  {
    icon: Flame,
    year: "c. 1851–1876",
    title: "Two decades in the forest",
    description:
      "Continued his sadhana in the deep Amarkantak forest for nearly 20 years after his grandfather's passing. He later described the moment of God-realization simply: “God came in a flash. All the problems were solved.”",
    source: "site",
  },
  {
    icon: Landmark,
    year: "after realization",
    title: "Sannyasa at Sringeri Math",
    description:
      "Came out of the forest and took monastic initiation at Sringeri Math, founded by Adi Shankaracharya, receiving the name Govindananda Bharati.",
    source: "site",
  },
  {
    icon: Compass,
    year: "c. 1873–1915",
    title: "A forty-year pilgrimage around the world",
    description:
      "Undertook a pilgrimage of tens of thousands of miles across more than fifty countries — reportedly some eighty percent of it on foot — travelling through Europe, the Americas, the Pacific, and the Far East before returning to India.",
    source: "research",
  },
  {
    icon: Users,
    year: "c. 1901",
    title: "Audience with world leaders",
    description:
      "According to several independent biographical accounts, his travels brought him into contact with figures such as Queen Victoria, U.S. President Theodore Roosevelt, Kaiser Wilhelm II, and Queen Emma of the Netherlands, among others.",
    source: "research",
  },
  {
    icon: Mountain,
    year: "1926",
    title: "Settles on Shivapuri Hill, Nepal",
    description:
      "Entered Nepal from the east after crossing the Himalaya, staying around Pashupatinath and the neighbouring Gokarna, Kiranteshwar and Godawari areas, and for some years on Shivapuri Hill north of Kathmandu — from which he came to be known, in Nepal and the world, as The Shivapuri Baba.",
    source: "site",
  },
  {
    icon: Flower2,
    year: "28 January 1963",
    title: "Mahasamadhi at Dhruvasthali",
    description:
      "Left his body at around 6:00 AM at his forest retreat (Kuti) in Dhruvasthali, east of Pashupatinath Temple, after 37 years in Nepal. He is traditionally said to have lived 137 years — an extraordinary claim that independent historians have not been able to verify.",
    source: "site",
  },
];

const sources = [
  { title: "Authentic Website of ShivapuriBaba (archived, 2019)", url: "https://web.archive.org/web/20190715142422/http://www.shivapuribaba.org/" },
  { title: "Shivapuri Baba — Wikipedia", url: "https://en.wikipedia.org/wiki/Shivapuri_Baba" },
  { title: "Samnyaasis Outside the State: Sivapuri Baba — namboothiri.com", url: "https://www.namboothiri.com/articles/sivapuribaba.htm" },
  { title: "Shivapuri Baba and His Pilgrimage Around the World — Vedic Feed", url: "https://vedicfeed.com/shivapuri-baba/" },
  { title: "Biography of Shivapuri Baba (1826–1963) — shivapuri-baba.com", url: "https://shivapuri-baba.com/biography/" },
];

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <PageHeading>Timeline</PageHeading>
      <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-sm text-muted-foreground">
        A chronological record of Shivapuri Baba’s life, combining details published on the
        original site with additional biographical and calendrical research from independent
        sources — cited at the end of this page. Where accounts differ, the most widely cited
        version is shown, and disputed points are noted.
      </p>

      <section className="mb-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {astroFacts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <Icon className="size-6 text-primary" />
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {label}
              </p>
              <p className="font-heading font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          The precise birth <em>tithi</em> (lunar day) is not recorded in any source available for
          this research — only the nakshatra, month and year above are documented.
        </p>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-center justify-center gap-2 text-primary">
          <MapPin className="size-5" />
          <h2 className="font-heading text-xl font-bold text-foreground">
            Where the journey began
          </h2>
        </div>
        <MapEmbed
          query="Malabar, Kerala, India"
          title="Map of Malabar, Kerala, India — birthplace of Shivapuri Baba"
        />
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Malabar, Kerala, South India — no specific village is recorded in available sources.
        </p>
      </section>

      <section>
        <div className="relative border-l border-border pl-8 sm:pl-10">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-in fade-in-0 slide-in-from-left-2 relative pb-12 last:pb-0"
              >
                <span className="absolute top-0.5 -left-[2.55rem] flex size-9 items-center justify-center rounded-full border border-primary/30 bg-accent text-primary shadow-sm sm:-left-[3.05rem] sm:size-10">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {event.year}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{event.title}</h3>
                <p className="mt-2 leading-7 text-foreground/85">{event.description}</p>
                {event.source === "research" && (
                  <span className="mt-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
                    from independent research
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider className="my-14" />

      <section>
        <h2 className="mb-5 text-center font-heading text-xl font-bold text-foreground">
          Further Reading &amp; Sources
        </h2>
        <ul className="mx-auto max-w-xl space-y-2 text-sm">
          {sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:underline"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
