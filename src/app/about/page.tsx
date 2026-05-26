import Image from "next/image";
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
        <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[var(--surface-muted)] ring-glow">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/headshot.jpeg"
                  alt="Jake Dale-Rourke - Launchsmith"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-5 rounded-[18px] border border-white/10 p-5">
              <div className="section-label">Based in</div>
              <p className="mt-2 text-sm text-white/70">{site.location}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link text-sm"
                >
                  GitHub
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="section-label">About</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A practical technical partner for small teams and founders.
            </h1>
            <div className="mt-5 space-y-5 text-lg leading-8 text-white/70">
              <p>
                I am Jake, a web and mobile developer based in Longridge, Preston. I
                build websites, web applications, and mobile apps for clients across
                the UK, with a focus on clean UX, reliable implementation, and a
                polished launch.
              </p>
              <p>
                The work is intentionally straightforward: clear communication, honest
                timelines, useful decisions, and code that can keep moving after the
                first release.
              </p>
            </div>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {[
                {
                  title: "What I do",
                  body: "End-to-end product builds: discovery, interface design, frontend, backend, integrations, deployment, and iteration.",
                },
                {
                  title: "How I work",
                  body: "Fast feedback loops, visible progress, plain-English technical decisions, and careful scope control.",
                },
                {
                  title: "Availability",
                  body: "Currently taking on new projects for websites, apps, automation, and practical AI integrations.",
                },
              ].map((s) => (
                <section key={s.title} className="grid gap-3 py-6 sm:grid-cols-[180px_1fr]">
                  <h2 className="text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-6 text-white/64">{s.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-12">
              <div className="section-label">Process</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                How I work
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  ["1", "Discovery", "We clarify goals, users, scope, risks, and the smallest useful launch."],
                  ["2", "Planning", "I map deliverables, timeline, technical approach, and the decisions needed before build."],
                  ["3", "Build", "You see steady progress while I design, code, integrate, and refine the product."],
                  ["4", "Launch", "We test, fix, deploy, and make sure the release is ready for real users."],
                  ["5", "Support", "After launch, we can improve the product with fixes, analytics, and new features."],
                ].map(([step, title, description]) => (
                  <section
                    key={step}
                    className="grid gap-4 rounded-[18px] border border-white/10 p-5 sm:grid-cols-[44px_1fr]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                      {step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/64">
                        {description}
                      </p>
                    </div>
                  </section>
                ))}
              </div>
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
          </div>
        </div>
      </Container>
    </div>
  );
}
