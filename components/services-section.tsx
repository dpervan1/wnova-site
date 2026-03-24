const tiers = [
  {
    name: "Web stranica",
    price: "od 350€",
    description: "Za firme kojima treba jasna, brza i uredna web stranica koja ostavlja ozbiljan dojam.",
    features: [
      "Dizajn i razvoj po mjeri",
      "Mobile-first pristup",
      "SEO optimizacija",
      "Kontakt forma i integracije",
      "Objava i deployment",
    ],
  },
  {
    name: "Projektne usluge",
    price: "Po dogovoru",
    description: "Za webshop, redizajn, AI integraciju ili drugi projekt koji traži više planiranja i izvedbe.",
    features: [
      "Webshop s upravljanjem narudžbi",
      "AI chatbot i automatizacija",
      "Custom funkcionalnosti",
      "Kompletni redizajn stranice",
      "Tehnička konzultacija",
    ],
  },
  {
    name: "Mjesečna suradnja",
    price: "od 220€/mj",
    description: "Za firme koje žele stalnu podršku, oglase, SEO i redovite dorade bez traženja novog izvođača.",
    features: [
      "Google Ads i Meta kampanje",
      "SEO strategija i praćenje",
      "Mjesečno izvještavanje",
      "Održavanje i update-ovi",
      "Prioritetna podrška",
    ],
  },
] as const;

export function ServicesSection() {
  return (
    <section id="paketi" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset">
          <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            Usluge i cijene
          </p>

          <h2 className="font-heading mt-4 text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white text-balance">
            Jasna ponuda za ono što ti stvarno treba.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            Bez nepotrebnih stavki i bez kompliciranja. Odaberi uslugu koja odgovara projektu koji želiš pokrenuti.
          </p>
        </div>

        <div className="section-inset mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--bg-card)]/75 p-5 transition-colors hover:border-[var(--line-strong)] sm:p-6"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--fg-dim)] uppercase">
                {tier.name}
              </p>
              <p className="font-heading mt-3 text-2xl font-bold text-white">
                {tier.price}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5" role="list">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
