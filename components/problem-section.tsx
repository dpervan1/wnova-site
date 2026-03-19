import { cn } from "@/lib/utils";

const problems = [
  "Nemaš web stranicu ili je zastarjela i odbija klijente.",
  "Ne pojavljuješ se na Googleu kad te netko traži.",
  "Stranica nema jasnu strukturu koja vodi posjetitelja do upita.",
  "Konkurencija s boljim webom dobiva tvoje klijente.",
  "Ulazeš u reklame, ali ih šalješ na stranicu koja ne konvertira.",
] as const;

const stats = [
  { value: "53%", label: "posjetitelja napušta stranicu koja se učitava duže od 3 sekunde." },
  { value: "75%", label: "ljudi ocjenjuje kredibilitet tvrtke prema izgledu njenog weba." },
  { value: "80%+", label: "kupnji započinje online pretragom. Ako nisi vidljiv, ne postojiš." },
] as const;

export function ProblemSection() {
  return (
    <section id="problem" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="section-inset mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
          Problem
        </p>

        <h2 className="font-heading mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white text-balance">
          Slaba online prisutnost košta te klijenata.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
          Dobar proizvod ili usluga nisu dovoljni ako te nitko ne može pronaći online.
        </p>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5" role="list">
          {problems.map((text, i) => (
            <li
              key={i}
              className={cn(
                "rounded-2xl border border-[var(--line)] bg-[var(--bg-card)]/55 p-5 text-[15px] leading-7 text-[var(--fg-muted)] sm:p-6 sm:text-base",
                i === problems.length - 1 && "sm:col-span-2",
              )}
            >
              <div className="flex items-start gap-4">
                <span className="font-heading inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 text-sm font-semibold text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-7 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className="border-t border-[var(--accent)]/15 pt-5 sm:pt-6">
              <p className="font-heading text-3xl font-bold tracking-tight text-[var(--accent)] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
