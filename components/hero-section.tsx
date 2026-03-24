import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <Image
          src="/brand/wnova-logo-horizontal-dark.png"
          alt="WEBNOVA"
          width={1339}
          height={255}
          priority
          className="mb-8 h-12 w-auto sm:mb-10 sm:h-12"
        />

        <h1 className="font-heading max-w-[12ch] text-[clamp(3.2rem,13vw,6.5rem)] leading-[0.84] font-bold tracking-[-0.06em] text-white text-balance uppercase sm:max-w-5xl sm:leading-[0.9] sm:tracking-[-0.05em]">
          Podigni svoju
          <br />
          online prisutnost.
        </h1>

        <p className="mt-5 text-base tracking-[0.2em] font-medium text-[var(--fg-muted)] uppercase sm:mt-6 sm:text-xl sm:tracking-[0.26em]">
          Brzo. Jasno. Moderno.
        </p>

        <a
          href="#problem"
          className="group mt-12 flex flex-col items-center gap-2 text-[var(--fg-dim)] transition-colors hover:text-white sm:mt-16"
          aria-label="Skrolaj dolje"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M10 4 L10 22 M4 17 L10 23 L16 17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}