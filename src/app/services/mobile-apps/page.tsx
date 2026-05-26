/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description: "iOS and mobile app development in the UK. Custom mobile applications from £500 - £30,000. MVPs, companion apps, app store submission, and API integration. Swift and React Native development.",
  alternates: {
    canonical: "/services/mobile-apps",
  },
};

export default function MobileAppsPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Services
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Mobile App Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            I build polished iOS and mobile applications that users love. From MVPs to companion apps, I focus on great UX, solid performance, and clean app store submissions. Let's turn your mobile idea into something people actually want to use.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              What I Build
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              Types of Mobile Apps
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">MVPs</strong> - Minimum viable products to test ideas quickly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">Companion apps</strong> - Mobile extensions of web platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">App store prep</strong> - Screenshots, descriptions, and submission
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent-2)]" />
                <span className="text-sm text-white/70">
                  <strong className="text-white">API integration</strong> - Connect mobile apps to backends and services
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Technology
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              iOS Development
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              I specialise in iOS development using Swift and SwiftUI, creating native apps that feel great on iPhone and iPad. Your app will be optimised for performance, battery life, and the latest iOS features.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-white/70">• Swift and SwiftUI for modern iOS development</li>
              <li className="text-sm text-white/70">• UIKit for complex custom interfaces</li>
              <li className="text-sm text-white/70">• Core Data for local data persistence</li>
              <li className="text-sm text-white/70">• Push notifications and background tasks</li>
              <li className="text-sm text-white/70">• App Store submission and updates</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 p-8 card-glass">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Process
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
              App Development Workflow
            </h2>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  1
                </span>
                <div>
                  <strong className="text-sm text-white">Discovery</strong>
                  <p className="text-xs text-white/70">Define app concept, target audience, and core features</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  2
                </span>
                <div>
                  <strong className="text-sm text-white">Design</strong>
                  <p className="text-xs text-white/70">Wireframes, UI design, and user flow mapping</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  3
                </span>
                <div>
                  <strong className="text-sm text-white">Development</strong>
                  <p className="text-xs text-white/70">Build features with TestFlight beta testing</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-xs font-semibold text-white">
                  4
                </span>
                <div>
                  <strong className="text-sm text-white">Launch</strong>
                  <p className="text-xs text-white/70">App Store submission, launch, and post-launch support</p>
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
              <div className="text-3xl font-semibold text-white">£500 - £30,000</div>
              <p className="mt-2 text-xs text-white/60">
                Pricing depends on complexity, features, and platform. Simple utility apps start at £500, while full-featured apps with complex UI, backend integration, and app store submission can go up to £30,000.
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
