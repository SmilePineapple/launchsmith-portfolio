export const site = {
  name: "Launchsmith",
  role: "Web & Mobile Developer",
  description:
    "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK including Manchester, Liverpool, Leeds, and nationwide.",
  accent: {
    hex: "#2563eb",
  },
  url: "https://launchsmith-portfolio.vercel.app",
  location: "Longridge, Preston, UK",
  email: "hello@launchsmith.dev",
  socials: {
    github: "https://github.com/SmilePineapple",
    linkedin: "https://linkedin.com/in/jakedalerourke",
    twitter: "https://twitter.com/launchsmith",
  },
  services: [
    "Website Development",
    "Web Applications",
    "iOS App Development",
    "Automation & AI Integration",
  ],
  serviceAreas: [
    "Preston",
    "Manchester",
    "Liverpool",
    "Leeds",
    "London",
    "Birmingham",
    "Bristol",
    "Edinburgh",
    "Glasgow",
    "Newcastle",
    "Sheffield",
    "Nottingham",
    "Leicester",
    "Brighton",
    "United Kingdom",
  ],
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

