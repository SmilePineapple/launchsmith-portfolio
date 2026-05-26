/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Why Next.js is Perfect for Business Websites",
  description: "Discover why Next.js has become the go-to framework for modern business websites. Performance benefits, SEO advantages, and developer experience explained for UK businesses.",
  alternates: {
    canonical: "/blog/next-js-for-business-websites",
  },
};

export default function BlogPost() {
  return (
    <div className="bg-transparent">
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 hover:text-white"
          >
            ← Back to blog
          </Link>
          <div className="mt-8">
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span className="font-semibold text-[var(--accent-2)]">Web Development</span>
              <span>·</span>
              <span>March 2026</span>
              <span>·</span>
              <span>4 min read</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Why Next.js is Perfect for Business Websites
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Discover why Next.js has become the go-to framework for modern business websites. Performance benefits, SEO advantages, and developer experience explained.
            </p>
          </div>

          <div className="mt-12 prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight text-white">What is Next.js?</h2>
            <p className="text-white/70">
              Next.js is a React framework that enables developers to build fast, SEO-friendly websites and web applications. It provides a powerful set of features that make it ideal for business websites of all sizes.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Performance Benefits</h2>
            <p className="text-white/70">
              Performance is crucial for business websites, and Next.js excels in this area:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Server-side rendering:</strong> Pages render on the server for faster initial load times</li>
              <li><strong className="text-white">Static generation:</strong> Pre-builds pages at build time for optimal performance</li>
              <li><strong className="text-white">Image optimisation:</strong> Automatic image resizing and format conversion</li>
              <li><strong className="text-white">Code splitting:</strong> Loads only the JavaScript needed for each page</li>
              <li><strong className="text-white">Font optimisation:</strong> Automatic font loading and subsetting</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">SEO Advantages</h2>
            <p className="text-white/70">
              Search engine optimisation is built into Next.js:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Server-side rendering:</strong> Search engines can crawl content easily</li>
              <li><strong className="text-white">Metadata API:</strong> Easy management of meta tags and Open Graph data</li>
              <li><strong className="text-white">Sitemap generation:</strong> Automatic sitemap creation for search engines</li>
              <li><strong className="text-white">Robots.txt support:</strong> Built-in robots.txt generation</li>
              <li><strong className="text-white">Fast page speeds:</strong> Google prioritises fast-loading sites in rankings</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Developer Experience</h2>
            <p className="text-white/70">
              Next.js provides an excellent developer experience:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">TypeScript support:</strong> Built-in TypeScript for type safety</li>
              <li><strong className="text-white">Hot reload:</strong> Instant feedback during development</li>
              <li><strong className="text-white">File-based routing:</strong> Simple and intuitive routing system</li>
              <li><strong className="text-white">API routes:</strong> Build backend functionality in the same codebase</li>
              <li><strong className="text-white">Vercel integration:</strong> Seamless deployment with automatic optimisations</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Cost-Effective for Businesses</h2>
            <p className="text-white/70">
              Next.js helps reduce long-term costs:
            </p>
            <ul className="text-white/70 space-y-2">
              <li>Fast development means lower initial costs</li>
              <li>Optimised performance reduces hosting needs</li>
              <li>Excellent maintainability reduces ongoing support costs</li>
              <li>Scalable architecture grows with your business</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Ready for Your Business?</h2>
            <p className="text-white/70">
              Next.js is an excellent choice for business websites that need to be fast, SEO-friendly, and easy to maintain. Whether you're building a new site or modernising an existing one, Next.js provides the foundation for success.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:opacity-95"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
