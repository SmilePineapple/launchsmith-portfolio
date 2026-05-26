"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

const categories = ["All", "Website", "Web App", "iOS App"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFeatured =
    selectedCategory === "All"
      ? featured
      : featured.filter((p) => p.category === selectedCategory);

  const filteredMore =
    selectedCategory === "All"
      ? more
      : more.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="section-label">Portfolio</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Work shipped across web, mobile, and automation.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            A selection of live products, client websites, and iOS apps. Each project
            focuses on clear UX, useful scope, and a maintainable path after launch.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Featured
            </h2>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {filteredFeatured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              More projects
            </h2>
            <Link href="/contact" className="text-link text-sm">
              Contact
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMore.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
