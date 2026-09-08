"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-6 sm:px-8">
              {slide.href ? (
                <Link
                  href={slide.href}
                  className="font-heading text-lg font-semibold text-white hover:underline sm:text-2xl"
                >
                  {slide.caption}
                </Link>
              ) : (
                <p className="font-heading text-lg font-semibold text-white sm:text-2xl">
                  {slide.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-4 flex gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "size-2 rounded-full transition-all",
              i === active ? "w-5 bg-white" : "bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}
