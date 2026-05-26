/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Automation & AI Integration Services",
  description: "Automation and AI integration services in the UK. Webhook automations, internal tools, AI features, and system glue from £1,000 - £15,000. Connect tools via APIs and automate workflows.",
  alternates: {
    canonical: "/services/automation",
  },
};

export default function AutomationPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Services
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Automation & AI Integration
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Let's remove the busywork. I connect your tools via APIs and webhooks, automate repetitive workflows, and add AI features where they actually make sense. From internal tools to customer-facing automation, I'll help you work smarter.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              What I Build
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Types of Automation
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Webhook automations</strong> - Connect tools and trigger actions automatically
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Internal tools</strong> - Custom dashboards and admin panels for your team
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">AI features</strong> - Add ChatGPT, Claude, or custom AI models to your workflow
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">System glue</strong> - Connect disparate tools and create unified workflows
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Technology
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Integration Stack
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              I work with APIs, webhooks, and modern automation platforms to connect your tools and streamline workflows. Your automations will be reliable, secure, and easy to monitor.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-white/70">• REST APIs and GraphQL integrations</li>
              <li className="text-sm text-white/70">• Webhook handlers and event-driven workflows</li>
              <li className="text-sm text-white/70">• OpenAI, Anthropic, and custom AI models</li>
              <li className="text-sm text-white/70">• Zapier, Make, and n8n integrations</li>
              <li className="text-sm text-white/70">• Error handling and monitoring</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Process
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Automation Workflow
            </h2>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-sm text-white">Mapping</strong>
                  <p className="text-xs text-white/70">Identify manual processes and automation opportunities</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-sm text-white">Design</strong>
                  <p className="text-xs text-white/70">Plan workflow logic, error handling, and edge cases</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-sm text-white">Build</strong>
                  <p className="text-xs text-white/70">Implement automations with testing and monitoring</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  4
                </span>
                <div>
                  <strong className="text-sm text-white">Deploy</strong>
                  <p className="text-xs text-white/70">Launch with documentation and ongoing support</p>
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
                Pricing depends on complexity, integrations, and AI features. Simple webhook automations start at £1,000, while complex AI-powered systems with multiple integrations can go up to £15,000.
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
