import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const isIos = project.category === "iOS App";
  const details = [
    ["Type", project.category],
    ["Role", "UX, build, integration, launch"],
    ["Focus", project.stack.slice(0, 3).join(", ")],
  ];

  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <Link href="/portfolio" className="text-link text-sm">
          Back to portfolio
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-label">{project.category}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/70">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.external.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold hover:opacity-95"
              >
                {project.external.label}
              </a>
              <Link
                href="/contact"
                className="btn-secondary inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Build something similar
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[18px] border border-white/10 bg-[var(--surface-muted)] ring-glow">
          <div className="relative aspect-[16/9]">
            {isIos && (
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(circle_at_85%_40%,rgba(79,140,255,0.14),transparent_60%)]"
              />
            )}
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className={isIos ? "object-contain p-6" : "object-cover"}
              priority
            />
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[18px] border border-white/10 p-5">
              <div className="section-label">Project details</div>
              <dl className="mt-5 space-y-4">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-white/42">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-white/74">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            <section>
              <div className="section-label">Highlights</div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.025] p-5 text-sm leading-6 text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
              <div>
                <div className="section-label">Problem</div>
                <p className="mt-4 text-sm leading-7 text-white/68">{project.problem}</p>
              </div>
              <div>
                <div className="section-label">Solution</div>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {project.solution}
                </p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-10">
              <div className="section-label">Build approach</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ["Shape", "Clarified the core user flow and reduced the build to the pieces needed for a useful launch."],
                  ["Ship", "Built responsive, production-ready screens with clean structure and practical performance decisions."],
                  ["Improve", "Left room for future iteration through maintainable code, clear content structure, and focused UX."],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-[18px] border border-white/10 p-5">
                    <h2 className="text-base font-semibold text-white">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-white/10 pt-10">
              <div className="section-label">Gallery</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.galleryImages.slice(0, 4).map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-[18px] border border-white/10 bg-[var(--surface-muted)]"
                  >
                    <div className="relative aspect-[16/10]">
                      {isIos && (
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(45,212,191,0.12),transparent_60%),radial-gradient(circle_at_85%_40%,rgba(79,140,255,0.12),transparent_65%)]"
                        />
                      )}
                      <Image
                        src={src}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 430px"
                        className={isIos ? "object-contain p-5" : "object-cover"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="panel mt-14 grid gap-5 p-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Want a build with this level of care?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/62">
              Send over the idea, constraints, and timeline. I will help you shape a
              sensible route to launch.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold hover:opacity-95"
          >
            Enquire
          </Link>
        </div>
      </Container>
    </div>
  );
}
