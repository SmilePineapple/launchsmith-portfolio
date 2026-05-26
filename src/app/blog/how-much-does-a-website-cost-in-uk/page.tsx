/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost in the UK?",
  description: "A practical guide to website pricing in the UK, from simple landing pages to complex web applications. Learn what factors influence cost and how to budget effectively for your web project.",
  alternates: {
    canonical: "/blog/how-much-does-a-website-cost-in-uk",
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
              <span className="font-semibold text-[var(--accent-2)]">Pricing</span>
              <span>·</span>
              <span>May 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              How Much Does a Website Cost in the UK?
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A practical guide to website pricing in the UK, from simple landing pages to complex web applications. Learn what factors influence cost and how to budget effectively.
            </p>
          </div>

          <div className="mt-12 prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Understanding Website Pricing</h2>
            <p className="text-white/70">
              Website costs in the UK vary significantly based on complexity, features, and the level of customisation required. Understanding these factors helps you make informed decisions and budget effectively for your web project.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Typical Price Ranges</h2>
            <p className="text-white/70">
              Here's a breakdown of what you can expect to pay for different types of websites in the UK:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Landing pages:</strong> £250 - £2,000 - Single-page sites focused on conversion</li>
              <li><strong className="text-white">Marketing websites:</strong> £2,000 - £8,000 - Multi-page sites with custom design</li>
              <li><strong className="text-white">Web applications:</strong> £5,000 - £25,000 - Functional apps with user accounts and databases</li>
              <li><strong className="text-white">E-commerce sites:</strong> £5,000 - £30,000 - Online stores with payment processing</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Factors That Influence Cost</h2>
            <p className="text-white/70">
              Several key factors determine the final price of your website:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Design complexity:</strong> Custom designs cost more than templates</li>
              <li><strong className="text-white">Number of pages:</strong> More pages require more content and development time</li>
              <li><strong className="text-white">Functionality:</strong> Features like user accounts, payment processing, and custom forms add cost</li>
              <li><strong className="text-white">Content creation:</strong> Copywriting, photography, and video production increase the budget</li>
              <li><strong className="text-white">SEO requirements:</strong> Advanced SEO optimisation and content strategy add to the cost</li>
              <li><strong className="text-white">Ongoing maintenance:</strong> Consider annual costs for hosting, updates, and support</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Getting the Best Value</h2>
            <p className="text-white/70">
              To get the best value for your investment:
            </p>
            <ul className="text-white/70 space-y-2">
              <li>Start with clear requirements and a defined scope</li>
              <li>Prioritise features - build what's essential first</li>
              <li>Choose a developer who understands your business goals</li>
              <li>Plan for ongoing maintenance and updates</li>
              <li>Consider the long-term value, not just the initial cost</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Ready to Start Your Project?</h2>
            <p className="text-white/70">
              Whether you need a simple landing page or a complex web application, I can help you build a website that meets your goals and budget. Get in touch to discuss your project and get a detailed quote.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:opacity-95"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
