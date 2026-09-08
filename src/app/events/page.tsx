import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Events",
};

const events = [
  {
    title: "Mool Nakshatra Celebration at Samadhi Mandir",
    date: "31st August",
    time: "10:30 AM",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeading>Events</PageHeading>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-foreground">{event.title}</h2>
            <dl className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground">
              <div className="flex gap-1.5">
                <dt className="font-medium text-foreground/80">Date:</dt>
                <dd>{event.date}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-medium text-foreground/80">Time:</dt>
                <dd>{event.time}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
