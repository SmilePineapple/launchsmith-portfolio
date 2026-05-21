import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Web Application Development Services",
  description: "Custom web application development in the UK. Full-stack web apps from £1,000 - £15,000. Authentication, dashboards, CRUD workflows, and API integrations built with Next.js, React, and Node.js.",
  alternates: {
    canonical: "/services/web-apps",
  },
};

export default function WebAppsPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Services
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Web Application Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Need more than a website? I build full-stack web applications with authentication, dashboards, and scalable foundations. Whether it's an internal tool or customer platform, I'll create something that solves real business problems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              What I Build
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Types of Web Apps
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">App shells</strong> - Full-stack applications with authentication and user management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">CRUD + workflows</strong> - Data management apps with complex business logic
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Integrations</strong> - Connect with APIs, payment gateways, and third-party services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Dashboards</strong> - Analytics, admin panels, and data visualization tools
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Technology
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Full-Stack Capabilities
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              I build complete web applications with secure authentication, database management, and API integrations. Your app will be production-ready with proper error handling, validation, and security best practices.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-white/70">• Next.js with App Router for modern architecture</li>
              <li className="text-sm text-white/70">• Supabase for authentication and database</li>
              <li className="text-sm text-white/70">• REST APIs and webhooks for integrations</li>
              <li className="text-sm text-white/70">• Payment processing (Stripe, PayPal)</li>
              <li className="text-sm text-white/70">• File uploads and storage</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Process
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Development Approach
            </h2>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-sm text-white">Requirements</strong>
                  <p className="text-xs text-white/70">Define features, user flows, and technical requirements</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-sm text-white">Architecture</strong>
                  <p className="text-xs text-white/70">Design database schema, API structure, and authentication flow</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-sm text-white">Development</strong>
                  <p className="text-xs text-white/70">Build core features with regular demos and feedback loops</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  4
                </span>
                <div>
                  <strong className="text-sm text-white">Testing & Launch</strong>
                  <p className="text-xs text-white/70">Comprehensive testing, deployment, and monitoring setup</p>
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
              <div className="text-3xl font-semibold text-white">£1,000 - £15,000</div>
              <p className="mt-2 text-xs text-white/60">
                Pricing depends on complexity, features, and integrations. Simple CRUD apps start at £1,000, while complex platforms with authentication, payments, and custom features can go up to £15,000.
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
