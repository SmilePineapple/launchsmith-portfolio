"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, site } from "@/lib/site";
import { Container } from "@/components/Container";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b10]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-2)] shadow-[0_0_18px_rgba(45,212,191,0.65)]" />
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={[
                "text-sm font-medium",
                pathname === item.href
                  ? "text-white"
                  : "text-white/58 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn-primary inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold hover:opacity-95"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}
