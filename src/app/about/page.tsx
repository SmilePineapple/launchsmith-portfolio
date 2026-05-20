import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Launchsmith: UK web and mobile developer based in Longridge, Preston. Specializing in clean websites, web apps, and iOS applications for clients across Manchester, Liverpool, Leeds, London, and nationwide.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-start">
          <div>
            <div className="aspect-square w-full max-w-[320px] rounded-3xl border border-white/10 bg-[var(--surface-muted)] card-glass ring-glow overflow-hidden">
              <img
                src="/headshot.jpeg"
                alt="Jake Dale-Rourke - Launchsmith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              About
            </div>
            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              About
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/70">
              I'm Jake, a web and mobile developer based in Longridge, Preston. I
              build clean, modern websites, web applications, and iOS apps for
              clients across the UK. Whether you're a startup founder, small business
              owner, or someone with a great idea, I'll help you turn it into a
              polished product that actually works.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/70">
              I believe in straightforward communication, honest timelines, and
              shipping quality work. No jargon overload, no hidden costs — just a
              collaborative process where we build something you're proud of.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                {
                  title: "What I do",
                  body: "End-to-end product builds: from initial idea and UX design through to frontend, backend, integrations, and deployment. I handle the full development process so you can focus on your business.",
                },
                {
                  title: "How I work",
                  body: "Fast iteration, clear communication, and a focus on shipping with quality. I'll keep you updated throughout the project, explain technical decisions in plain English, and deliver on the timeline we agree on.",
                },
                {
                  title: "Availability",
                  body: "Currently taking on new projects. Whether you're in Manchester, Liverpool, Leeds, London, or anywhere else in the UK, send a message with what you're building and your timeline.",
                },
              ].map((s) => (
                <section
                  key={s.title}
                  className="rounded-2xl border border-white/10 p-6 card-glass"
                >
                  <h2 className="text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">{s.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold hover:opacity-95"
              >
                Send a message
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-semibold text-white hover:bg-white/10"
              >
                View work
              </Link>
            </div>

            <div className="mt-10 text-sm text-white/55">
              {site.name} · {site.role}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
