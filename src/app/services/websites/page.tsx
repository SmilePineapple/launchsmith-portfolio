import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Website Development Services",
  description: "Professional website development services in the UK. Modern, responsive websites from £250 - £8,000. Landing pages, marketing sites, portfolio sites, and content pages built with Next.js and React.",
  alternates: {
    canonical: "/services/websites",
  },
};

export default function WebsitesPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Services
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Website Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            I build modern, responsive websites that help you connect with customers across the UK. From landing pages to full marketing sites, I create fast, SEO-friendly designs that work beautifully on every device.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              What I Build
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Types of Websites
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Landing pages</strong> - High-conversion single pages for products, services, or campaigns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Marketing sites</strong> - Multi-page websites showcasing your business, services, and products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Portfolio sites</strong> - Clean, professional portfolios for creatives and freelancers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Content sites</strong> - Blogs, documentation, and information-heavy websites
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Technology
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Modern Stack
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              I use Next.js, React, and TypeScript to build websites that are fast, secure, and easy to maintain. Your site will be SEO-optimised from day one with proper metadata, semantic HTML, and fast loading times.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-white/70">• Next.js for performance and SEO</li>
              <li className="text-sm text-white/70">• React for interactive components</li>
              <li className="text-sm text-white/70">• TypeScript for code reliability</li>
              <li className="text-sm text-white/70">• Tailwind CSS for responsive design</li>
              <li className="text-sm text-white/70">• Vercel for fast deployment</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Process
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              How I Work
            </h2>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-sm text-white">Discovery</strong>
                  <p className="text-xs text-white/70">We discuss your goals, audience, and requirements</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-sm text-white">Design</strong>
                  <p className="text-xs text-white/70">I create a clean, mobile-first design tailored to your brand</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-sm text-white">Build</strong>
                  <p className="text-xs text-white/70">I develop your website with regular check-ins and updates</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  4
                </span>
                <div>
                  <strong className="text-sm text-white">Launch</strong>
                  <p className="text-xs text-white/70">We test thoroughly and deploy to production</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Pricing
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Transparent Pricing
            </h2>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold text-white">£250 - £8,000</div>
              <p className="mt-2 text-xs text-white/60">
                Pricing depends on complexity, pages, and features. Simple landing pages start at £250, while full marketing sites with custom features can go up to £8,000.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:opacity-95"
            >
              Get a quote
            </Link>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 hover:text-white"
          >
            ← Back to all services
          </Link>
        </div>
      </Container>
    </div>
  );
}
