import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isIos = project.category === "iOS App";

  return (
    <article className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.055]">
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
          {isIos && (
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(6,182,212,0.22),transparent_55%),radial-gradient(circle_at_85%_40%,rgba(109,40,217,0.24),transparent_60%)]"
            />
          )}
          <Image
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className={[
              "transition duration-700 group-hover:scale-[1.04]",
              isIos ? "object-contain p-6" : "object-cover",
            ].join(" ")}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="section-label">
          {project.category}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
          <Link href={`/portfolio/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/70">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-white/64"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/portfolio/${project.slug}`}
            className="text-link text-sm"
          >
            Read case study
          </Link>
          <a
            href={project.external.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/55 hover:text-white"
          >
            {project.external.label}
          </a>
        </div>
      </div>
    </article>
  );
}
