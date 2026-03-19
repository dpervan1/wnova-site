import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { EmailIcon, WhatsAppIcon } from "@/components/social-icons";

export function CtaSection() {
  return (
    <section id="kontakt" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] section-panel">
        <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
              Kontakt
            </p>

            <h2 className="font-heading mt-4 text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white text-balance">
              Pošalji upit za projekt.
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-[var(--fg-muted)]">
              Napiši što treba napraviti, a mi se javljamo s konkretnim prijedlogom.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="mailto:info@wnova.cc"
                className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] transition hover:text-white"
              >
                <EmailIcon className="h-4 w-4" />
                info@wnova.cc
              </Link>
              <Link
                href="https://wa.me/385958021920"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] transition hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
