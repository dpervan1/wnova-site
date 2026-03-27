import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="px-4 pb-10 pt-32 sm:px-6 sm:pb-12 sm:pt-40 lg:px-8 lg:pt-44">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset max-w-3xl">
          <Link
            href="/"
            className="text-xs font-semibold tracking-[0.2em] text-[var(--fg-dim)] uppercase transition hover:text-white"
          >
            Natrag na početnu
          </Link>

          <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            {eyebrow}
          </p>

          <h1 className="font-heading mt-4 text-[clamp(2.4rem,7vw,4.8rem)] leading-[0.96] font-bold tracking-[-0.05em] text-white text-balance">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}