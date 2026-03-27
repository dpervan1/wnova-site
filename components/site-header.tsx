"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Usluge", href: "/usluge" },
  { label: "Paketi", href: "/paketi" },
  { label: "O nama", href: "/o-nama" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[var(--line)] bg-[var(--bg)]/80 px-4 backdrop-blur-lg sm:rounded-full sm:px-6">
        {/* Top bar */}
        <div className="flex h-12 items-center justify-between sm:h-14">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center"
            aria-label="WEBNOVA početna stranica"
          >
            <Image
              src="/brand/wnova-logo-horizontal-dark.png"
              alt="WEBNOVA"
              width={1339}
              height={255}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primarna navigacija" className="hidden items-center gap-1 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-[var(--fg-muted)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/kontakt"
              className="hidden h-9 items-center rounded-full bg-[var(--accent)] px-5 text-xs font-semibold text-[var(--bg)] transition hover:brightness-110 sm:inline-flex"
            >
              Kontakt
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--fg-muted)] transition hover:text-white sm:hidden"
              aria-expanded={open}
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
            >
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-current transition duration-300 ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-current transition duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-px w-4 bg-current transition duration-300 ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={`grid transition-all duration-300 ease-out sm:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <nav
            className={`overflow-hidden ${open ? "border-t border-[var(--line)] pb-4 pt-3" : "border-t border-transparent pb-0 pt-0"}`}
            aria-label="Mobilna navigacija"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-[var(--fg-muted)] transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/kontakt"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[var(--accent)] py-2.5 text-center text-sm font-semibold text-[var(--bg)] transition hover:brightness-110"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}