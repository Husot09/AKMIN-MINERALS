"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, site } from "@/lib/content";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-mineral/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-4" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-ink text-base font-bold tracking-[0.12em] text-mineral shadow-sm md:h-14 md:w-14 md:text-lg">
            AK
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold uppercase tracking-[0.18em] text-ink md:text-xl">Akmin</span>
            <span className="block text-sm font-semibold text-stone md:text-base">Industrial Minerals</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-ink text-white" : "text-charcoal hover:bg-white hover:text-teal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <Link
            href="/contact"
            className="rounded-sm bg-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
          >
            Technical Inquiry
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-ink/15 bg-white text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ink/10 bg-mineral px-5 pb-5 lg:hidden">
          <div className="grid gap-1 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm px-3 py-3 text-sm font-semibold ${
                  pathname === item.href ? "bg-ink text-white" : "text-charcoal hover:bg-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <LanguageToggle compact />
          </div>
          <p className="mt-4 border-t border-ink/10 pt-4 text-xs leading-5 text-stone">{site.tagline}</p>
        </div>
      ) : null}
    </header>
  );
}
