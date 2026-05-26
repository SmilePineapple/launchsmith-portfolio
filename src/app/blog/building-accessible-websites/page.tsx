/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Building Accessible Websites: A Developer's Guide",
  description: "Web accessibility isn't just a legal requirement—it's good business. Learn practical techniques for building inclusive digital experiences that work for everyone, including users with disabilities.",
  alternates: {
    canonical: "/blog/building-accessible-websites",
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
              <span className="font-semibold text-[var(--accent-2)]">Accessibility</span>
              <span>·</span>
              <span>January 2026</span>
              <span>·</span>
              <span>5 min read</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building Accessible Websites: A Developer&apos;s Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Web accessibility isn't just a legal requirement—it's good business. Learn practical techniques for building inclusive digital experiences that work for everyone.
            </p>
          </div>

          <div className="mt-12 prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Why Accessibility Matters</h2>
            <p className="text-white/70">
              Web accessibility ensures that people with disabilities can use your website. This includes users with visual, auditory, motor, and cognitive impairments. Beyond being the right thing to do, accessibility improves SEO, user experience, and expands your potential audience.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Legal Requirements</h2>
            <p className="text-white/70">
              In the UK, the Equality Act 2010 requires businesses to make reasonable adjustments for disabled users. Public sector organisations must meet WCAG 2.1 AA standards. Even for private businesses, accessibility is increasingly expected and can protect against discrimination claims.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Core Principles of WCAG</h2>
            <p className="text-white/70">
              The Web Content Accessibility Guidelines (WCAG) provide four core principles:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Perceivable:</strong> Information must be presentable in ways users can perceive (text alternatives for images, captions for videos)</li>
              <li><strong className="text-white">Operable:</strong> Interface components must be operable (keyboard navigation, sufficient time to respond)</li>
              <li><strong className="text-white">Understandable:</strong> Information and interface operation must be understandable (clear language, consistent navigation)</li>
              <li><strong className="text-white">Robust:</strong> Content must be robust enough to be interpreted by assistive technologies (valid HTML, ARIA attributes)</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Practical Implementation</h2>
            <p className="text-white/70">
              Here are key techniques for building accessible websites:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Semantic HTML:</strong> Use proper HTML elements (headings, lists, buttons) for screen readers</li>
              <li><strong className="text-white">Alt text:</strong> Provide descriptive text for all images</li>
              <li><strong className="text-white">Colour contrast:</strong> Ensure text has sufficient contrast against backgrounds (4.5:1 for normal text)</li>
              <li><strong className="text-white">Keyboard navigation:</strong> Make all interactive elements accessible via keyboard</li>
              <li><strong className="text-white">Form labels:</strong> Associate labels with form inputs for screen readers</li>
              <li><strong className="text-white">Focus indicators:</strong> Show clear visual focus states for keyboard users</li>
              <li><strong className="text-white">ARIA attributes:</strong> Use ARIA roles and properties where semantic HTML is not enough</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Testing for Accessibility</h2>
            <p className="text-white/70">
              Regular testing ensures your site remains accessible:
            </p>
            <ul className="text-white/70 space-y-2">
              <li><strong className="text-white">Automated tools:</strong> Use tools like axe DevTools, Lighthouse, or WAVE for initial checks</li>
              <li><strong className="text-white">Keyboard testing:</strong> Navigate your site using only a keyboard</li>
              <li><strong className="text-white">Screen reader testing:</strong> Test with NVDA (Windows) or VoiceOver (Mac)</li>
              <li><strong className="text-white">User testing:</strong> Include users with disabilities in your testing process</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Business Benefits</h2>
            <p className="text-white/70">
              Accessibility provides tangible business benefits:
            </p>
            <ul className="text-white/70 space-y-2">
              <li>Larger potential audience (15% of the world has some form of disability)</li>
              <li>Improved SEO (search engines favour accessible sites)</li>
              <li>Better user experience for everyone</li>
              <li>Reduced legal risk</li>
              <li>Enhanced brand reputation</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight text-white mt-8">Getting Started</h2>
            <p className="text-white/70">
              Start by auditing your current site against WCAG guidelines. Focus on high-impact fixes first: alt text, colour contrast, and keyboard navigation. Accessibility is an ongoing process, not a one-time task.
            </p>
            <p className="text-white/70">
              If you need help making your website accessible, get in touch to discuss an accessibility audit and implementation plan.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 text-xs font-semibold uppercase tracking-[0.14em] hover:opacity-95"
            >
              Discuss accessibility
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
