import Link from "next/link";
import { Quote, Compass, ArrowRight } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { SectionDivider } from "@/components/section-divider";

const heroSlides = [
  {
    src: "https://web.archive.org/web/20190715142422im_/http://www.shivapuribaba.org/wp-content/uploads/2017/06/ShivapuriBaba1.jpg",
    alt: "Shiva Puri Baba",
    caption: "Baba at Dhruvasthali, Kathmandu",
    href: "/about-shivapuri-baba",
  },
  {
    src: "https://web.archive.org/web/20190715142422im_/http://www.shivapuribaba.org/wp-content/uploads/2017/06/bernhaddt-1160x760.jpg",
    alt: "Baba With Devotee",
    caption: "Baba With Devotee",
    href: "/about-shivapuri-baba",
  },
  {
    src: "https://web.archive.org/web/20190715142422im_/http://www.shivapuribaba.org/wp-content/uploads/2017/06/baba-samadhi-temple-690x450.jpg",
    alt: "Shiva Puri Baba Samadhi Temple",
    caption: "Baba Samadhi",
    href: "/about-aashram",
  },
];

const questionTeasers = [
  {
    q: "Is there any easier means to achieve progress in Swadharma?",
    a: "Always keep in mind that death may occur at any time. Do duties and avoid un-necessary involvements and gossips. Then only it is possible…",
  },
  {
    q: "If so, every human being, irrespective of his caste, creed, color or religion should lead Swadharma to realize God?",
    a: "Every individual can practice Swadharma. Success and failure are common to all. The aspirant should not only seek good results and success alone. At…",
  },
  {
    q: "How can we have desired goal?",
    a: "Without dexterity and hard labour, we cannot achieve the desired goal. Those who did good works in their past life can realize God in…",
  },
  {
    q: "How can we realize God immediately?",
    a: "There are necessary duties, which you have to perform due to a human birth. Apart from spending time for the above one should spent…",
  },
  {
    q: "Is there any difference between other living beings and the human?",
    a: "Other living beings life is fixed towards instinct and reproduction but human life is Karma Bhumi or the land for discharging duties and a…",
  },
  {
    q: "Are the Three Principle of Swadharma same for one and all?",
    a: "The basic principle of Swadharma is same for all. But the implementation varies. Each individual should apply it according to time, place and circumstances.",
  },
  {
    q: "Does it mean that without the practice of Swadharma, Self Realization is not possible?",
    a: "Yes. Practice it regularly and sincerely. Where Swadharma is practiced, you will realize your Inner Self. By which in time with your sincerity God appears before…",
  },
  {
    q: "Is Swadharma and Varnashrama Dharma associated with each other?",
    a: "These days some intellectuals are interpreting Varnashrama Dharma or caste system as Swadharma, which is a wrong interpretation. Main objective of Swadharma is to perform our necessary…",
  },
  {
    q: "What are the differences between Swadharma Sadhana and the practices of other religions?",
    a: "Human beings have always been asking the questions on the mystery of life and the creation. It prevailed from the very beginning of mankind.",
  },
  {
    q: "Beside these, are there any other books or teachings where we can read about Swadharma?",
    a: "You can find them in Buddhist philosophy and they come under the Eight Noble Paths. Similarly, in Christianity there are the Ten Commandments, which…",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="animate-in fade-in-0 duration-700">
        <HeroCarousel slides={heroSlides} />
      </div>

      <Link
        href="/timeline"
        className="group mt-6 flex items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-accent/40 px-6 py-4 transition-colors hover:bg-accent/70"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Compass className="size-5" />
          </span>
          <div>
            <p className="font-semibold text-foreground">Explore the Timeline</p>
            <p className="text-sm text-muted-foreground">
              Birth nakshatra, life journey, and a map of where it all began.
            </p>
          </div>
        </div>
        <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
      </Link>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Quote className="mb-2 size-6 fill-primary/15 text-primary" />
          <h2 className="mb-1 text-sm font-semibold tracking-wide text-primary uppercase">
            Mahāvākya
          </h2>
          <p className="font-accent text-2xl leading-snug text-foreground/90">
            Live Right Life.
            <br />
            Worship GOD.
            <br />
            That is All. Nothing More.
          </p>
        </div>

        <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            Welcome…
          </h2>
          <p className="text-justify leading-7 text-foreground/85">
            The aim of this website is to share the teachings of The God Realized Siddha
            MahaPurusha Shree Shivapuri Baba, in this 21st Century to the humanity. We welcome
            you to visit this serene Samadhi Mandir of Sree Shivapuri Baba for silent meditation.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
          >
            Plan your visit &rarr;
          </Link>
        </div>

        <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h2 className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase">
            Latest News
          </h2>
          <p className="text-sm text-muted-foreground">
            See the{" "}
            <Link href="/events" className="text-primary hover:underline">
              Events
            </Link>{" "}
            and{" "}
            <Link href="/published-article" className="text-primary hover:underline">
              Published Article
            </Link>{" "}
            sections for the latest updates.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-2 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Question/Answer</h2>
          <SectionDivider className="mt-4 mb-6" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {questionTeasers.map((item, i) => (
            <Link
              key={item.q}
              href="/questionanswer"
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-in fade-in-0 slide-in-from-bottom-2 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-accent/40 hover:shadow-md"
            >
              <p className="font-medium text-foreground">{item.q}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.a}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/questionanswer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-accent/60 px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent"
          >
            View all questions &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
