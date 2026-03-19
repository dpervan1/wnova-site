const steps = [
  {
    number: "01",
    title: "Više upita",
    description:
      "Čista struktura i jasan poziv na akciju znače više kontakata iz istog prometa.",
  },
  {
    number: "02",
    title: "Bolja vidljivost",
    description:
      "Tehnički ispravan i brz web koji Google prepoznaje i stavlja ispred konkurencije.",
  },
  {
    number: "03",
    title: "Stabilniji rast",
    description:
      "Stranica koja radi za tebe non-stop, privlači nove klijente i gradi povjerenje.",
  },
] as const;

export function ResultsSection() {
  return (
    <section id="rezultati" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="section-inset mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
          Rezultati
        </p>

        <h2 className="font-heading mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white text-balance">
          Više upita, bolja vidljivost i stabilniji rast.
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-[var(--line)] p-5 sm:border-none sm:p-0">
              <p className="font-heading text-4xl font-bold text-[var(--accent)]/20 sm:text-5xl">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
