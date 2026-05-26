import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const featured = projects.filter((p) => p.featured).slice(0, 3);
const recent = projects.slice(0, 4);

const services = [
  {
    title: "Websites",
    desc: "Fast marketing sites with clean messaging, sharp responsive layouts, and a structure that supports search.",
    href: "/services/websites",
  },
  {
    title: "Web Apps",
    desc: "Dashboards, portals, internal tools, and product workflows with maintainable foundations.",
    href: "/services/web-apps",
  },
  {
    title: "Mobile Apps",
    desc: "Polished iOS and cross-platform products shaped around speed, clarity, and release quality.",
    href: "/services/mobile-apps",
  },
  {
    title: "Automation / AI",
    desc: "API integrations, workflow automation, and practical AI features that remove repeated manual work.",
    href: "/services/automation",
  },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Launchsmith: UK web and mobile developer based in Longridge, Preston. Building clean websites, web apps, and iOS apps for clients across Manchester, Liverpool, Leeds, London, and nationwide.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="bg-transparent">
      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
            <div className="max-w-3xl">
              <div className="section-label">{site.role}</div>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Websites, apps, and automation built with product-level care.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                I am Jake, a UK web and mobile developer based near Preston. I help
                founders and small teams turn ideas into clean, reliable digital
                products with clear UX, modern engineering, and a launch-ready finish.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold hover:opacity-95"
                >
                  Discuss a project
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-secondary inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-7 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View recent work
                </Link>
              </div>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
                {[
                  ["12+", "launched projects"],
                  ["UK", "based and remote-ready"],
                  ["Web + mobile", "from one technical partner"],
                ].map(([stat, label]) => (
                  <div key={stat}>
                    <div className="text-2xl font-semibold tracking-tight text-white">
                      {stat}
                    </div>
                    <div className="mt-1 text-sm text-white/55">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-3">
              <div className="grid gap-3">
                {recent.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="group grid grid-cols-[96px_1fr] gap-4 rounded-xl border border-white/8 bg-black/18 p-3 transition hover:border-white/18 hover:bg-white/[0.045]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/[0.035]">
                      <Image
                        src={project.coverImage}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="96px"
                        className={
                          project.category === "iOS App"
                            ? "object-contain p-2"
                            : "object-cover"
                        }
                      />
                    </div>
                    <div className="min-w-0 self-center">
                      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-white/45">
                        {project.category}
                      </div>
                      <div className="mt-1 truncate text-sm font-semibold text-white group-hover:text-[var(--accent-2)]">
                        {project.title}
                      </div>
                      <div className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">
                        {project.summary}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-14 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Services</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Practical builds, not bloated packages
              </h2>
            </div>
            <Link href="/services" className="text-link text-sm">
              See all services
            </Link>
          </div>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="grid gap-3 py-6 transition hover:bg-white/[0.025] sm:grid-cols-[220px_1fr_auto] sm:items-center"
              >
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-white/64">{s.desc}</p>
                <span className="text-sm font-medium text-[var(--accent-2)]">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-14 sm:py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-label">Selected work</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Recent launches and product work
              </h2>
            </div>
            <Link href="/portfolio" className="text-link text-sm">
              Browse portfolio
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="section-label">Process</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                A direct route from idea to launch
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/64">
                You get a clear plan, regular progress updates, and a build that is
                shaped around the real product problem instead of a stack of generic
                deliverables.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Shape", "Clarify the audience, must-have flows, constraints, and launch goal."],
                ["02", "Build", "Design and develop in tight loops with visible progress and plain-English decisions."],
                ["03", "Launch", "Test, polish, deploy, and leave the project in a maintainable state."],
                ["04", "Iterate", "Improve the product after launch with analytics, feedback, and practical next steps."],
              ].map(([step, title, body]) => (
                <div key={step} className="rounded-[18px] border border-white/10 p-5">
                  <div className="text-xs font-semibold text-[var(--accent-2)]">
                    {step}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="panel grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <div className="section-label">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Have something to build?
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/64">
                Send a quick message with the idea, timeline, and any useful links.
                I will reply with next steps and the questions that matter.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold hover:opacity-95"
            >
              Send a message
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
