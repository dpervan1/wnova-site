import Link from "next/link";
import Image from "next/image";
import { InstagramIcon } from "@/components/social-icons";

const links = [
  { label: "Usluge", href: "/usluge" },
  { label: "Paketi", href: "/paketi" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/wnova.cc/", Icon: InstagramIcon },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 pt-14 pb-8 sm:px-6 lg:px-8">
      <div className="section-inset mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Logo + opis */}
          <div className="max-w-xs">
            <Link href="/" aria-label="WEBNOVA početna stranica">
              <Image
                src="/brand/wnova-logo-horizontal-dark.png"
                alt="WEBNOVA"
                width={1339}
                height={255}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-[var(--fg-muted)]">
              Izrada web stranica, webshopova, AI integracija i digitalnog marketinga
              za firme koje žele ozbiljniji online nastup.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--fg-muted)] transition hover:border-[var(--accent)]/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Linkovi + kontakt */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--fg-dim)] uppercase">
                Navigacija
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--fg-muted)] transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--fg-dim)] uppercase">
                Kontakt
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:project@wnova.cc"
                    className="text-sm text-[var(--fg-muted)] transition hover:text-white"
                  >
                    project@wnova.cc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[var(--line)] pt-6">
          <p className="text-xs text-[var(--fg-dim)]">
            &copy; {new Date().getFullYear()} WEBNOVA. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
