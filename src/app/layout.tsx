import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Launchsmith · UK Web & Mobile Developer",
    template: `%s · Launchsmith`,
  },
  description:
    "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK including Manchester, Liverpool, Leeds, London, and nationwide.",
  keywords: [
    "web developer UK",
    "mobile app developer UK",
    "website development Preston",
    "iOS app developer",
    "Next.js developer",
    "React developer",
    "web application development",
    "UK freelance developer",
    "Manchester web developer",
    "Liverpool web developer",
    "Leeds web developer",
    "London web developer",
    "Birmingham web developer",
    "Bristol web developer",
    "Edinburgh web developer",
    "Glasgow web developer",
    "Newcastle web developer",
    "Sheffield web developer",
    "Nottingham web developer",
    "Leicester web developer",
    "Brighton web developer",
    "UK app development",
    "UK software developer",
    "UK iOS developer",
    "UK React developer",
    "UK Next.js developer",
    "UK TypeScript developer",
    "UK web designer",
    "UK full-stack developer",
    "UK frontend developer",
    "UK backend developer",
    "UK custom web development",
    "UK business websites",
    "UK e-commerce development",
    "UK mobile application development",
    "UK iPhone app development",
    "UK iPad app development",
    "UK Android app development",
    "UK automation developer",
    "UK AI integration",
    "UK SEO services",
    "UK web optimization",
    "UK responsive design",
    "UK progressive web apps",
    "UK static site generation",
    "UK serverless development",
    "UK database development",
    "UK API development",
    "UK cloud development",
  ],
  authors: [{ name: "Launchsmith" }],
  creator: "Launchsmith",
  publisher: "Launchsmith",
  metadataBase: new URL("https://launchsmith-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://launchsmith-portfolio.vercel.app",
    title: "Launchsmith · UK Web & Mobile Developer",
    description:
      "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK including Manchester, Liverpool, Leeds, London, and nationwide.",
    siteName: "Launchsmith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launchsmith · UK Web & Mobile Developer",
    description:
      "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK including Manchester, Liverpool, Leeds, London, and nationwide.",
    creator: "@launchsmith",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Launchsmith",
    description: "UK-based web and mobile developer building clean, modern websites, web apps, and iOS apps. Based in Longridge, Preston, serving clients across the UK.",
    url: "https://launchsmith-portfolio.vercel.app",
    email: "hello@launchsmith.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Longridge",
      addressRegion: "Preston",
      addressCountry: "UK",
    },
    areaServed: ["United Kingdom", "Manchester", "Liverpool", "Leeds", "London", "Birmingham", "Bristol", "Edinburgh", "Glasgow", "Newcastle", "Sheffield", "Nottingham", "Leicester", "Brighton"],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "iOS Development",
      "React",
      "Next.js",
      "TypeScript",
      "Web Applications",
      "SEO",
      "Automation",
      "AI Integration",
    ],
    sameAs: [
      "https://github.com/SmilePineapple",
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jake Dale-Rourke",
    jobTitle: "Web & Mobile Developer",
    worksFor: {
      "@type": "Organization",
      name: "Launchsmith",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Longridge",
      addressRegion: "Preston",
      addressCountry: "UK",
    },
    email: "hello@launchsmith.dev",
    url: "https://launchsmith-portfolio.vercel.app",
    sameAs: [
      "https://github.com/SmilePineapple",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://launchsmith-portfolio.vercel.app/",
      },
    ],
  };

  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full bg-transparent text-[var(--foreground)]">
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
