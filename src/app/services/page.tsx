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
    description: "I build modern, responsive websites that help you connect with customers across the UK. From landing pages to full marketing sites, I create fast, SEO-friendly designs that work beautifully on every device.",
    outcomes: [
      "Fast, responsive, modern design",
      "SEO-ready structure and metadata",
      "Clean copy layout and clear CTAs",
    ],
    included: ["Landing pages", "Marketing sites", "Portfolio sites", "Content pages"],
    priceRange: "£250 - £8,000",
  },
  {
    title: "Web Apps",
    description: "Need more than a website? I build full-stack web applications with authentication, dashboards, and scalable foundations. Whether it's an internal tool or customer platform, I'll create something that solves real business problems.",
    outcomes: [
      "Solid foundations for scaling",
      "Auth, dashboards, admin flows",
      "Clean UI and maintainable code",
    ],
    included: ["App shells", "CRUD + workflows", "Integrations", "Deployment"],
    priceRange: "£1,000 - £15,000",
  },
  {
    title: "Mobile Apps",
    description: "I build polished iOS and mobile applications that users love. From MVPs to companion apps, I focus on great UX, solid performance, and clean app store submissions. Let's turn your mobile idea into something people actually want to use.",
    outcomes: [
      "Polished UX for iOS and Android",
      "Performance and reliability focus",
      "Clean releases and iteration",
    ],
    included: ["MVPs", "Companion apps", "App store prep", "API integration"],
    priceRange: "£500 - £30,000",
  },
  {
    title: "Automation / AI Integrations",
    description: "Let's remove the busywork. I connect your tools via APIs and webhooks, automate repetitive workflows, and add AI features where they actually make sense. From internal tools to customer-facing automation, I'll help you work smarter.",
    outcomes: [
      "Automate manual workflows",
      "Connect tools via APIs and webhooks",
      "Add AI features where they make sense",
    ],
    included: ["Webhook automations", "Internal tools", "AI features", "System glue"],
    priceRange: "£1,000 - £15,000",
  },
] as const;

const faq = [
  {
    q: "What technologies do you use?",
    a: "I work with modern stacks: Next.js, React, TypeScript, and Node.js for web. For iOS, I use Swift. I choose tools based on what fits the project best.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. I’ve worked with early-stage founders and established businesses. I’m comfortable with fast iteration, MVPs, and scaling up.",
  },
  {
    q: "Can you help with SEO?",
    a: "Yes. I build with SEO in mind — clean structure, fast performance, proper metadata, and technical best practices. I can also help with content strategy.",
  },
  {
    q: "How long does a typical build take?",
    a: "It depends on scope. A clean website can be quick; apps take longer. I’ll give you a clear plan once I understand the requirements.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We can agree a lightweight support setup after launch (fixes, improvements, iterations).",
  },
  {
    q: "What’s your pricing model?",
    a: "I work on a project basis — no hourly billing, no surprise invoices. We agree scope and price upfront, and I deliver against that.",
  },
  {
    q: "Do you work with clients outside the UK?",
    a: "Yes. I’m UK-based but work with clients globally. Remote collaboration is standard for me.",
  },
  {
    q: "Can you help with existing projects?",
    a: "Yes. I can take over existing codebases, refactor legacy code, or add new features to what you already have.",
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
    description: "Website development, web applications, iOS apps, and automation/AI integration. UK-based developer serving clients across the country with fast, professional builds.",
    provider: {
      "@type": "Organization",
      name: "Launchsmith",
      url: "https://launchsmith-portfolio.vercel.app",
    },
    areaServed: ["United Kingdom", "Manchester", "Liverpool", "Leeds", "London", "Birmingham", "Bristol", "Edinburgh", "Glasgow", "Newcastle", "Sheffield", "Nottingham", "Leicester", "Brighton"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <Container className="py-14 sm:py-16">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Services
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            No packages and no hard pricing here — just a clean conversation about
            what you need, and a build plan that fits. Explore my{" "}
            <Link href="/portfolio" className="text-[var(--accent-2)] hover:underline">
              portfolio
            </Link>{" "}
            to see examples of my work, or{" "}
            <Link href="/contact" className="text-[var(--accent-2)] hover:underline">
              get in touch
            </Link>{" "}
            to discuss your project.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {services.map((s) => (
            <section
              key={s.title}
              className="rounded-2xl border border-white/10 p-6 card-glass"
            >
              <h2 className="text-base font-semibold tracking-tight text-white">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {s.description}
              </p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    Outcomes
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-white/70">
                    {s.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                    Includes
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-white/70">
                    {s.included.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm font-semibold text-[var(--accent-2)]">
                  {s.priceRange}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/services/${s.title.toLowerCase().replace(/ /g, "-").replace(" / ", "-")}`}
                    className="text-sm font-semibold text-[var(--accent-2)] hover:underline"
                  >
                    Find out more
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-[var(--accent-2)] hover:underline"
                  >
                    Ask about {s.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight text-white">FAQ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {faq.map((item) => (
              <section
                key={item.q}
                className="rounded-2xl border border-white/10 p-6 card-glass"
              >
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{item.a}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[36px] border border-white/10 p-8 card-glass ring-glow">
          <div
            aria-hidden
            className="orb pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.38),transparent_70%)] blur-2xl"
          />
          <div className="relative">
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Ready to start?
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Send a message with what you’re building and your timeline.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold hover:opacity-95"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
