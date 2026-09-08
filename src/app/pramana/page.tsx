import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pramana",
};

const quoteImages = [
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quotes4.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote9.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote8.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote7.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote6.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote3.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/baba_quote2.png",
  "https://web.archive.org/web/20190715140833im_/http://www.shivapuribaba.org/wp-content/uploads/2017/07/quotes1.png",
];

export default function PramanaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-semibold text-foreground">Pramana</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {quoteImages.map((src) => (
          <a
            key={src}
            href={src}
            target="_blank"
            rel="noreferrer noopener"
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Pramana quote"
              className="aspect-[1160/760] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
