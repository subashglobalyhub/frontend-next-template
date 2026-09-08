import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Fraunces } from "next/font/google";
import { cookies } from "next/headers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Authentic Website of ShivapuriBaba",
    template: "%s | Shivapuri Baba",
  },
  description:
    "The aim of this website is to share the teachings of The God Realized Siddha MahaPurusha Shree Shivapuri Baba, in this 21st Century to the humanity.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(210 20% 99%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(222 47% 7%)" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isDark = cookieStore.get("theme")?.value === "dark";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        inter.variable,
        fraunces.variable,
        geistMono.variable,
        "h-full antialiased",
        isDark && "dark"
      )}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
