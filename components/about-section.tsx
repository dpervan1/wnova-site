const values = [
  {
    title: "Jasan proces",
    description: "Od početnog dogovora do objave znaš što radimo, kada radimo i što dobivaš.",
  },
  {
    title: "Ozbiljna izvedba",
    description: "Fokus je na brzini, čistoći i dojmu koji stranica ostavlja na mobitelu i desktopu.",
  },
  {
    title: "Dugoročna podrška",
    description: "Ako projekt treba dalje održavati, oglašavati ili širiti, možeš nastaviti raditi s nama.",
  },
] as const;

export function AboutSection() {
  return (
    <section id="o-nama" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            WEBNOVA
          </p>

          <h2 className="font-heading mt-4 text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.03] font-bold tracking-[-0.03em] text-white text-balance">
            Gradimo funkcionalne digitalne sustave.
            <br />
            Tvoj rast započinje ovdje.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            Spajamo vrhunski web, pametnu AI automatizaciju i ciljani marketing u jednu cjelinu koja radi za tebe 24/7.
          </p>
        </div>

        <div className="section-inset mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-[var(--line)] bg-black/10 p-5 sm:p-6">
              <h3 className="font-heading text-base font-semibold text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}