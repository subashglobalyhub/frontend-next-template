import type { Metadata } from "next";
import { Clock, MapPin, Flower2 } from "lucide-react";
import { RichContent } from "@/components/rich-content";
import { PageHeading } from "@/components/page-heading";
import { MapEmbed } from "@/components/map-embed";

export const metadata: Metadata = {
  title: "Contact",
};

const content = `
<p><strong>Samadhi Mandir ::</strong></p>
<p>Opening Time: 6:00 AM<br/>
Closing Time: 5:00 PM</p>
<p><strong>Location</strong> :<br/>
Kathmandu, Nepal near Pashupatinath Temple<br/>
( 5 minutes walking from Golf Play Ground, Tilganga, Kathmandu. Nepal)</p>
<p><strong>Contact Person</strong> :</p>
<p>Shri Shiva Prasad Timilsina (<a href="tel:9841811715">9841811715</a>)<br/>
Shri Bishnu Prasad Timilsina (<a href="tel:9741045937">9741045937</a>, <a href="tel:97714484785">977-1-4484785/4470953</a>)</p>
<p>Shri Madhusudan Prasad Timilsina (<a href="tel:9751001948">9751001948</a>)</p>
<p>email: <a href="mailto:info@shivapuribaba.com">info@shivapuribaba.com</a>/<a href="mailto:swadharma1963@gmail.com">swadharma1963@gmail.com</a></p>
<p><strong>Regarding books you can contact Bishnu Prasad Timilsina in <a href="tel:9741045937">9741045937</a>.</strong></p>
<p><strong>How to contact ::</strong><br/>
Whosoever wants to visit Samadhi Mandir, they first need to contact one of THREE BROTHERS through mail if necessary. We will feel glad to answer such queries.</p>
`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <PageHeading>Contact</PageHeading>

      <section className="mb-12 grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
          <Clock className="size-6 text-primary" />
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Visiting Hours
          </p>
          <p className="font-heading font-semibold text-foreground">6:00 AM – 5:00 PM</p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
          <MapPin className="size-6 text-primary" />
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Location
          </p>
          <p className="font-heading font-semibold text-foreground">
            Tilganga, Kathmandu, Nepal
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
          <Flower2 className="size-6 text-primary" />
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            An Open Invitation
          </p>
          <p className="font-heading font-semibold text-foreground">Silent Meditation</p>
        </div>
      </section>

      <blockquote className="font-accent mx-auto mb-12 max-w-xl text-center text-xl leading-snug text-foreground/90">
        “We Welcome you to visit this serene Samadhi Mandir of Sree Shivapuri Baba for silent
        meditation.”
      </blockquote>

      <section className="mb-12">
        <MapEmbed
          query="Tilganga, Kathmandu, Nepal"
          title="Map showing Tilganga, Kathmandu, Nepal — near the Samadhi Mandir"
        />
      </section>

      <RichContent html={content} />
    </div>
  );
}
