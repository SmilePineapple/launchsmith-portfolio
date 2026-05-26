import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Launchsmith services: Website development, web applications, iOS apps, and automation/AI integration. UK-based developer serving clients across the country with fast, professional builds.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Websites",
    description:
      "Responsive marketing sites, landing pages, and portfolio sites with clear copy structure, strong performance, and SEO-ready foundations.",
    outcomes: ["Sharper first impression", "Clear enquiry paths", "Fast pages that are easy to maintain"],
    included: ["Landing pages", "Marketing sites", "Content pages", "Technical SEO"],
    href: "/services/websites",
    typical: "From focused landing pages to full business websites.",
  },
  {
    title: "Web Apps",
    description:
      "Custom product workflows, dashboards, portals, and internal tools built with reliable full-stack foundations.",
    outcomes: ["Cleaner operations", "Usable dashboards", "Room to scale after launch"],
    included: ["Auth", "CRUD workflows", "Integrations", "Deployment"],
    href: "/services/web-apps",
    typical: "Best for tools that need accounts, data, and repeat usage.",
  },
  {
    title: "Mobile Apps",
    description:
      "Polished iOS and cross-platform apps for MVPs, companion products, and focused consumer tools.",
    outcomes: ["App-store ready releases", "Mobile-first UX", "Fast iteration after feedback"],
    included: ["MVPs", "API integration", "Release prep", "Iteration support"],
    href: "/services/mobile-apps",
    typical: "Best for ideas where the phone is the natural home.",
  },
  {
    title: "Automation / AI Integrations",
    description:
      "Workflow automation, API glue, and practical AI features for businesses that want to remove repeated manual work.",
    outcomes: ["Less admin", "Connected systems", "Useful AI without theatre"],
    included: ["Webhooks", "Internal tools", "AI features", "System integrations"],
    href: "/services/automation",
    typical: "Best when your process already exists but takes too much time.",
  },
] as const;

const faq = [
  {
    q: "What technologies do you use?",
    a: "Mostly Next.js, React, TypeScript, Node.js, and Swift. I choose the stack around the product, not the other way round.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. I am comfortable with MVPs, early product decisions, fast feedback loops, and building just enough to launch properly.",
  },
  {
    q: "Can you help with SEO?",
    a: "Yes. I build with clean structure, metadata, performance, accessibility, and content hierarchy in mind from the start.",
  },
  {
    q: "How long does a typical build take?",
    a: "A focused website can be quick; apps and platforms take longer. I will give you a clear scope and timeline after discovery.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. After launch we can agree a light support or iteration setup for improvements, fixes, and new features.",
  },
  {
    q: "Can you help with existing projects?",
    a: "Yes. I can review, improve, or extend existing codebases when the foundations are workable.",
  },
] as const;

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Launchsmith Services",
    description:
      "Website development, web applications, iOS apps, and automation/AI integration. UK-based developer serving clients across the country with fast, professional builds.",
    provider: {
      "@type": "Organization",
      name: "Launchsmith",
      url: "https://launchsmith-portfolio.vercel.app",
    },
    areaServed: ["United Kingdom", "Manchester", "Liverpool", "Leeds", "London"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development Services",
      itemListElement: services.map((s, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <div className="bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="section-label">Services</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Clear technical help for serious launches.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            I work with founders and small teams who need a practical builder: someone
            who can shape the product, write the code, polish the interface, and get it
            live without making the process heavier than it needs to be.
          </p>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {services.map((s) => (
            <section key={s.title} className="grid gap-6 py-8 lg:grid-cols-[260px_1fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{s.typical}</p>
                <Link href={s.href} className="text-link mt-5 inline-block text-sm">
                  View service
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="text-sm leading-7 text-white/70">{s.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.included.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/62"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/[0.025] p-5">
                  <div className="section-label">Outcomes</div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-white/68">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="section-label">FAQ</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              The practical details
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faq.map((item) => (
              <section key={item.q} className="rounded-[18px] border border-white/10 p-5">
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{item.a}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="panel mt-16 grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <div className="section-label">Start</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Tell me what you want to build.
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/64">
              A short brief is enough. I will come back with the right questions,
              likely scope, and a sensible next step.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold hover:opacity-95"
          >
            Contact
          </Link>
        </div>
      </Container>
    </div>
  );
}
