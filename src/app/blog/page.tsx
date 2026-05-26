import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Web development insights, iOS app tips, and industry updates from Launchsmith. UK-based developer sharing knowledge on building clean, modern digital products.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "how-much-does-a-website-cost-in-uk",
    title: "How Much Does a Website Cost in the UK?",
    excerpt:
      "A practical guide to website pricing in the UK, from simple landing pages to complex web applications.",
    category: "Pricing",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    slug: "ios-vs-android-app-development",
    title: "iOS vs Android App Development: Which Should You Choose?",
    excerpt:
      "Comparing iOS and Android app development for UK businesses: costs, reach, and product fit.",
    category: "Mobile",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    slug: "next-js-for-business-websites",
    title: "Why Next.js is Perfect for Business Websites",
    excerpt:
      "Performance, SEO, and developer experience benefits for modern business websites.",
    category: "Web Development",
    date: "March 2026",
    readTime: "4 min read",
  },
  {
    slug: "seo-fundamentals-for-uk-businesses",
    title: "SEO Fundamentals for UK Businesses in 2026",
    excerpt:
      "Technical SEO, content structure, and local search basics for UK businesses.",
    category: "SEO",
    date: "February 2026",
    readTime: "7 min read",
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Developer's Guide",
    excerpt:
      "Practical techniques for building inclusive digital experiences that work for everyone.",
    category: "Accessibility",
    date: "January 2026",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-2xl">
          <div className="section-label">Blog</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Insights & Updates
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Practical articles on web development, iOS apps, SEO, and digital product
            strategy for people building something useful.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.055]"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span className="font-semibold text-[var(--accent-2)]">
                    {post.category}
                  </span>
                  <span>/</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-white group-hover:text-[var(--accent-2)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">{post.excerpt}</p>
                <div className="mt-4 text-xs text-white/60">{post.readTime}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="panel mt-16 p-8 sm:p-10">
          <div className="max-w-2xl">
            <div className="section-label">Newsletter</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Get insights in your inbox
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Occasional updates on web development, iOS apps, and product building.
              No spam, unsubscribe anytime.
            </p>
            <form
              action="https://formspree.io/f/xredppbg"
              method="POST"
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="h-11 flex-1 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-[var(--accent-2)]"
              />
              <button
                type="submit"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold hover:opacity-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
