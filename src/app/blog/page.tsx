import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Web development insights, iOS app tips, and industry updates from Launchsmith. UK-based developer sharing knowledge on building clean, modern digital products.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "how-much-does-a-website-cost-in-uk",
    title: "How Much Does a Website Cost in the UK?",
    excerpt: "A practical guide to website pricing in the UK, from simple landing pages to complex web applications. Learn what factors influence cost and how to budget effectively.",
    category: "Pricing",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    slug: "ios-vs-android-app-development",
    title: "iOS vs Android App Development: Which Should You Choose?",
    excerpt: "Comparing iOS and Android app development for UK businesses. Understand the differences, costs, and market reach to make the right choice for your mobile app.",
    category: "Mobile",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    slug: "next-js-for-business-websites",
    title: "Why Next.js is Perfect for Business Websites",
    excerpt: "Discover why Next.js has become the go-to framework for modern business websites. Performance benefits, SEO advantages, and developer experience explained.",
    category: "Web Development",
    date: "March 2026",
    readTime: "4 min read",
  },
  {
    slug: "seo-fundamentals-for-uk-businesses",
    title: "SEO Fundamentals for UK Businesses in 2026",
    excerpt: "Essential SEO strategies for UK businesses targeting local and national markets. From technical SEO to content strategy, learn what drives organic traffic.",
    category: "SEO",
    date: "February 2026",
    readTime: "7 min read",
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Developer's Guide",
    excerpt: "Web accessibility isn't just a legal requirement—it's good business. Learn practical techniques for building inclusive digital experiences that work for everyone.",
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Blog
          </div>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Insights & Updates
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Practical articles on web development, iOS apps, SEO, and digital product
            strategy. Written for founders, small business owners, and anyone building
            something digital.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 card-glass transition-transform hover:-translate-y-0.5"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-white/60">
                  <span className="font-semibold text-[var(--accent-2)]">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 font-serif text-xl font-semibold tracking-tight text-white group-hover:text-[var(--accent-2)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-[36px] border border-white/10 p-8 card-glass ring-glow sm:p-10">
          <div
            aria-hidden
            className="orb pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.5),transparent_70%)] blur-2xl"
          />
          <div className="relative max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Newsletter
            </div>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white">
              Get insights in your inbox
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Occasional updates on web development, iOS apps, and product building. No
              spam, unsubscribe anytime.
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
                className="h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-[var(--accent-2)]"
              />
              <button
                type="submit"
                className="btn-primary inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:opacity-95"
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
