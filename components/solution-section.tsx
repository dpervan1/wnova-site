import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Izrada i dizajn web stranica",
    description:
      "Stranice koje izgledaju uredno, učitavaju se brzo i jasno vode posjetitelja prema upitu ili pozivu.",
  },
  {
    title: "Izrada webshopova",
    description:
      "Webshopovi s jasnom strukturom, dobrim mobile prikazom i jednostavnim upravljanjem proizvodima i narudžbama.",
  },
  {
    title: "AI integracije",
    description:
      "Chatbotovi, automatizacije i AI alati koji ti štede vrijeme i olakšavaju komunikaciju s klijentima.",
  },
  {
    title: "Digitalni marketing",
    description:
      "SEO, Google Ads i Meta oglasi postavljeni tako da dovode kvalitetnije upite, a ne samo promet.",
  },
  {
    title: "Objava i održavanje",
    description:
      "Objava, tehničko održavanje i brza pomoć kad nešto treba doraditi, ispraviti ili nadograditi.",
  },
] as const;

export function SolutionSection() {
  return (
    <section id="usluge" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset">
          <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            Rješenje
          </p>

          <h2 className="font-heading mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white text-balance">
            Radimo web koji izgleda ozbiljno i ima jasan posao.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            Od prve ideje do objave. Bez razvlačenja projekta i bez nepotrebnog kompliciranja.
          </p>
        </div>

        <div className="section-inset mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-5">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "rounded-2xl border border-[var(--line)] bg-[var(--bg-card)]/72 p-5 transition-colors hover:border-[var(--line-strong)] sm:p-6",
                index === solutions.length - 1 && "md:col-span-2",
              )}
            >
              <div className={cn("space-y-2", index === solutions.length - 1 && "md:max-w-2xl") }>
                <h3 className="font-heading text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--fg-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
