import Link from "next/link";

type PageContactCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
};

export function PageContactCta({
  eyebrow = "Kontakt",
  title,
  description,
  buttonLabel = "Idi na kontakt",
}: PageContactCtaProps) {
  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            {eyebrow}
          </p>
          <h2 className="font-heading mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.03] font-bold tracking-[-0.03em] text-white text-balance">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            {description}
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--bg)] transition hover:brightness-110"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}