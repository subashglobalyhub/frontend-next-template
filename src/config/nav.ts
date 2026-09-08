export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-shivapuri-baba",
    children: [
      { label: "About Mahasiddha Purusha Shree Shivapuri Baba", href: "/about-shivapuri-baba" },
      { label: "About Samadhi Mandir", href: "/about-aashram" },
    ],
  },
  { label: "Pramana", href: "/pramana" },
  { label: "Question/Answer", href: "/questionanswer" },
  { label: "Charity", href: "/charity" },
  { label: "Events", href: "/events" },
  { label: "Teaching", href: "/teaching" },
  { label: "Published Article", href: "/published-article" },
  { label: "Contact", href: "/contact" },
];
