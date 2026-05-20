export const site = {
  name: "Launchsmith",
  role: "Web & Mobile Developer",
  description:
    "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK with fast turnaround and professional results.",
  accent: {
    hex: "#2563eb",
  },
  url: "https://launchsmith-portfolio.vercel.app",
  location: "Longridge, Preston, UK",
  email: "hello@launchsmith.dev",
  services: [
    "Website Development",
    "Web Applications",
    "iOS App Development",
    "Automation & AI Integration",
  ],
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

