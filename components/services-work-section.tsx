/* ------------------------------------------------------------------ */
/*  Kako radimo — naslovni blok                                        */
/* ------------------------------------------------------------------ */

function WorkIntro() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl rounded-[28px] py-6 section-panel sm:py-8 lg:py-10">
        <div className="section-inset max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-[var(--accent)] uppercase">
            Kako radimo
          </p>
          <h2 className="font-heading mt-4 text-[clamp(1.9rem,4.5vw,3.5rem)] leading-[1.03] font-bold tracking-[-0.03em] text-white text-balance">
            Svaka usluga ima svoj posao, svoje prednosti i stvari na koje treba paziti.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
            Ne radimo sve po istoj špranci. Pristup ovisi o tome treba li ti bolji prvi dojam, više prodaje, bolja automatizacija ili kvalitetniji upiti.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared helper za jednu sekciju usluge                              */
/* ------------------------------------------------------------------ */

type Benefit = { title: string; text: string };

type ServiceBlockProps = {
  number: string;
  title: string;
  lead: string;
  paragraphs: string[];
  benefits: Benefit[];
  watchOut: string[];
};

function ServiceBlock({
  number,
  title,
  lead,
  paragraphs,
  benefits,
  watchOut,
}: ServiceBlockProps) {
  return (
    <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-5xl rounded-[28px] section-panel">
        <div className="p-5 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-start gap-5">
            <span className="font-heading hidden text-[4rem] leading-none font-bold text-[var(--accent)]/15 sm:block lg:text-[5rem]">
              {number}
            </span>
            <div>
              <h3 className="font-heading text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--fg-muted)] sm:text-lg sm:leading-8">
                {lead}
              </p>
            </div>
          </div>

          {/* Detailed paragraphs */}
          <div className="mt-8 max-w-3xl space-y-4 border-t border-[var(--line)] pt-8">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-7 text-[var(--fg-muted)] sm:text-base sm:leading-8">
                {p}
              </p>
            ))}
          </div>

          {/* Benefits grid */}
          <div className="mt-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
              Prednosti
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-xl border border-[var(--line)] bg-black/15 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-white">{b.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Watch out */}
          <div className="mt-10 rounded-xl border border-[var(--accent)]/10 bg-[var(--accent)]/[0.04] p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
              Na što treba paziti
            </p>
            <ul className="mt-4 space-y-3" role="list">
              {watchOut.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm leading-6 text-[var(--fg-muted)]">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Konkretne usluge — sadržaj                                        */
/* ------------------------------------------------------------------ */

function WebAndShopSection() {
  return (
    <ServiceBlock
      number="01"
      title="Web stranice i webshopovi"
      lead="Radimo stranice i online trgovine koje izgledaju profesionalno, učitavaju se brzo i jasno vode posjetitelja prema cilju — upitu, kupnji ili pozivu."
      paragraphs={[
        "Svaka web stranica i webshop započinju s jasnom strukturom. Nije bitno samo da stranica izgleda lijepo, nego da posjetitelj u prvih par sekundi razumije tko ste, što nudite i što treba napraviti dalje. Ako to nije jasno, okreće se prema konkurenciji.",
        "Kod web stranica fokus je na čistom dizajnu, brzom učitavanju, jasnom sadržaju i kontakt putu koji je uvijek na dohvat ruke. Svaka stranica mora raditi jednako dobro na mobitelu kao i na desktopu, jer je većina prometa danas mobilna.",
        "Kod webshopova struktura ide malo dalje: kategorije, filteri, prikaz proizvoda, košarica i checkout moraju biti jednostavni i bez nepotrebnog trenja. Kupac mora u što manje koraka doći do narudžbe, a ti kao vlasnik moraš lako upravljati proizvodima, cijenama i narudžbama.",
        "Za oboje vrijedi isto pravilo: tehnika mora biti čista i brza, dizajn mora ostavljati dojam povjerenja, a sadržaj mora biti napisan tako da čovjek zna zašto je tu i što mu nudite.",
      ]}
      benefits={[
        { title: "Mobile-first pristup", text: "Dizajn se gradi od mobilne verzije prema gore jer je većina posjeta s mobitela." },
        { title: "Brzo učitavanje", text: "Svaka nepotrebna sekunda učitavanja smanjuje konverziju. Optimiziramo slike, kod i server odgovor." },
        { title: "SEO osnova", text: "Struktura, meta podaci, brzina i pristupačnost postavljeni tako da Google zna što je na stranici." },
        { title: "Jasna navigacija", text: "Posjetitelj mora znati gdje je, što može napraviti i kako doći do kontakta ili kupnje." },
        { title: "Upravljanje sadržajem", text: "Webshop s administracijom koja ti omogućuje da sam dodaješ proizvode, mijenjaš cijene i pratiš narudžbe." },
        { title: "Sigurnost i SSL", text: "HTTPS, zaštita formi, sigurna obrada podataka i redovito ažuriranje." },
      ]}
      watchOut={[
        "Stranica bez jasne strukture i poziva na akciju ne pretvara posjetitelje u klijente, koliko god dobro izgledala.",
        "Preskupi hosting ili prevelik broj pluginova usporavaju stranicu i kompliciraju održavanje.",
        "Webshop bez dobrog mobile iskustva gubi velik dio kupaca jer oni jednostavno ne završe kupnju.",
        'Sadržaj napisan „za Google" umjesto za ljude odbija posjetitelje i smanjuje povjerenje.',
      ]}
    />
  );
}

function AiSection() {
  return (
    <ServiceBlock
      number="02"
      title="AI integracije i automatizacija"
      lead="AI ima smisla tek kad stvarno štedi vrijeme, ubrzava procese ili pomaže klijentima da brže dođu do odgovora. Sve ostalo je samo fora."
      paragraphs={[
        "AI nije magični gumb koji rješava sve. Ali pravilno postavljena AI integracija može ozbiljno ubrzati komunikaciju s klijentima, smanjiti ručni rad i automatizirati ponavljajuće zadatke koji troše sate dnevno.",
        "Chatbotovi na web stranici mogu preuzeti prvi kontakt s posjetiteljem, odgovarati na česta pitanja, prikupljati podatke za upit ili čak voditi korisnika kroz katalog proizvoda. Ključ je da chatbot bude treniran na tvom sadržaju i da daje točne, korisne odgovore — ne generičke AI rečenice.",
        "Automatizacija ide korak dalje: povezivanje CRM sustava, automatsko slanje ponuda, obrada narudžbi, generiranje sadržaja ili automatsko razvrstavanje upita prema tipu. Sve to štedi vrijeme i smanjuje mogućnost ljudske greške.",
        "Bitno je krenuti od konkretnog problema. Ako imaš proces koji troši previše vremena ili komunikaciju koja se stalno ponavlja, tu je AI najkorisniji. Nemoj uvoditi AI samo zato jer svi to rade.",
      ]}
      benefits={[
        { title: "24/7 dostupnost", text: "Chatbot odgovara klijentima i kad ti ne radiš, bez pauze i bez vikenda." },
        { title: "Brža komunikacija", text: "Klijent dobiva odgovor u sekundi umjesto da čeka mail ili poziv." },
        { title: "Manje ručnog posla", text: "Automatizacija preuzima ponavljajuće zadatke i oslobađa tvoje vrijeme za ono što je bitno." },
        { title: "Pametnije sortiranje", text: "Upiti se automatski razvrstavaju prema tipu, hitnosti ili vrijednosti." },
        { title: "Personalizacija", text: "AI može prilagoditi ponudu ili odgovor na temelju ponašanja i podataka korisnika." },
        { title: "Skalabilnost", text: "Kad posao raste, automatizacija raste s njim bez dodatnog zapošljavanja za rutinske zadatke." },
      ]}
      watchOut={[
        "AI koji daje netočne ili generičke odgovore čini više štete nego koristi jer ruši povjerenje korisnika.",
        "Automatizacija bez jasnog cilja troši budžet i stvara nepotrebnu kompleksnost u poslovanju.",
        "Chatbot mora imati jasnu eskalaciju prema čovjeku kad ne zna odgovoriti ili kad je situacija osjetljiva.",
        "Kvaliteta AI-a ovisi o kvaliteti podataka kojima je treniran — loš input znači loš output.",
      ]}
    />
  );
}

function MarketingSection() {
  return (
    <ServiceBlock
      number="03"
      title="Digitalni marketing"
      lead="Marketing ima smisla tek kad vodi na stranicu koja zna pretvoriti promet u upit, prodaju ili razgovor. Inače samo trošiš budžet."
      paragraphs={[
        'Digitalni marketing nije samo "pokrenuti oglas". To je cijeli sustav koji uključuje SEO, Google Ads, Meta oglase, landing stranice, praćenje konverzija i stalnu optimizaciju. Ako bilo koji dio tog lanca ne radi, rezultat neće biti dobar.',
        "SEO optimizacija znači da tvoja stranica bude vidljiva kad netko na Googleu traži uslugu koju nudiš. To uključuje tehničku optimizaciju stranice, kvalitetan sadržaj koji odgovara na prava pitanja i izgradnju autoriteta domene kroz vrijeme.",
        "Google Ads i Meta oglasi služe za brže rezultate: kad trebaš odmah dovesti ciljani promet na stranicu. Ali oglas je samo polovina posla — ono što korisnik vidi kad klikne jednako je bitno. Zato su landing stranice koje konvertiraju ključni dio svake kampanje.",
        "Svaki euro uložen u marketing mora imati jasnu metriku: koliko upita je došlo, koliko je svaki upit koštao i kakva je kvaliteta tih upita. Bez toga je marketing samo trošak, a ne investicija.",
      ]}
      benefits={[
        { title: "SEO vidljivost", text: "Organski promet koji dolazi besplatno jer si pozicioniran za ključne pojmove u svojoj branši." },
        { title: "Ciljani oglasi", text: "Google Ads i Meta kampanje koje dovode ljude koji aktivno traže ili trebaju tvoju uslugu." },
        { title: "Landing stranice", text: "Stranice dizajnirane da pretvore klik u upit, poziv ili kupnju — ne generic homepage." },
        { title: "Praćenje rezultata", text: "Jasne metrike: cijena po upitu, konverzija, ROI. Bez nagađanja." },
        { title: "A/B testiranje", text: "Testiranje varijanti oglasa, naslova i stranica da se nađe kombinacija koja najbolje performira." },
        { title: "Mjesečno izvještavanje", text: "Znaš točno koliko je uloženo, koliko je upita stiglo i kakav je trend." },
      ]}
      watchOut={[
        "Oglas koji vodi na lošu stranicu je bačen novac — korisnik klikne, ali ne napravi ništa.",
        "SEO nije instant rezultat, treba minimalno 2-3 mjeseca da se vide prvi ozbiljniji pomaci.",
        "Prevelik fokus na klikove umjesto na kvalitetu upita troši budžet na ljude koji te nikad neće kontaktirati.",
        "Kampanje bez redovite optimizacije s vremenom gube učinkovitost i poskupljuju.",
      ]}
    />
  );
}

function MaintenanceSection() {
  return (
    <ServiceBlock
      number="04"
      title="Održavanje i ažuriranje"
      lead="Stranica nije gotova kad se objavi. Treba je redovito ažurirati, nadograđivati i održavati da ostane brza, sigurna i relevantna."
      paragraphs={[
        "Nakon objave, web stranica i webshop trebaju stalnu brigu. Tehnologije se mijenjaju, sigurnosni propusti se otkrivaju, sadržaj zastarijeva i posjetitelji očekuju sve bolji UX. Bez redovitog održavanja stranica postupno gubi na kvaliteti i sigurnosti.",
        "Mjesečno ili periodično održavanje uključuje tehničke provjere, ažuriranje sustava i pluginova, sigurnosne zakrpe, backup podataka i provjeru performansi. Ako nešto ne radi ili se pokvari, to se rješava brzo i bez čekanja novog projekta.",
        "Osim tehničkog dijela, tu je i sadržajno ažuriranje: dodavanje novih stranica, izmjena cijena, sezonske promjene, blog postovi, nove fotografije ili dodavanje novih funkcionalnosti kad posao to zahtijeva.",
        "Za firme kojima je web ključan kanal komunikacije, održavanje nije opcija nego nužnost. Zastarjeli sustav, spore stranice ili sigurnosni propusti direktno utječu na povjerenje klijenata i na poziciju u Google rezultatima.",
      ]}
      benefits={[
        { title: "Sigurnost", text: "Redovite zakrpe i ažuriranja zatvaraju poznate ranjivosti prije nego postanu problem." },
        { title: "Brzina i performanse", text: "Monitoring učitavanja i optimizacija kad se pojave uska grla ili novi sadržaj." },
        { title: "Backup podataka", text: "Redoviti backupi znače da nikad ne gubiš podatke, čak i u najgorem scenariju." },
        { title: "Sadržajne izmjene", text: "Nove stranice, cijene, slike ili tekstovi dodani brzo i uredno." },
        { title: "Tehnička podrška", text: "Kad nešto ne radi ili se nešto čudno događa, imaš koga pitati i tko to riješi." },
        { title: "SEO praćenje", text: "Redovita provjera pozicija, indeksacije i tehničkog stanja u Google Search Console." },
      ]}
      watchOut={[
        "Stranica bez ažuriranja nakon 6-12 mjeseci počinje kasniti u brzini, sigurnosti i SEO pozicijama.",
        "Pluginovi i sustavi koji se ne ažuriraju postaju sigurnosni rizik i mogu uzrokovati pad stranice.",
        "Bez backupa, bilo kakav problem na serveru ili hosting provideru može značiti potpuni gubitak podataka.",
        "Zastarjeli sadržaj šalje signal posjetiteljima i Googleu da se firma ne brine za svoju online prisutnost.",
      ]}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Glavni export — koristi se u /usluge stranici                      */
/* ------------------------------------------------------------------ */

export function ServicesWorkSection() {
  return (
    <>
      <WorkIntro />
      <WebAndShopSection />
      <AiSection />
      <MarketingSection />
      <MaintenanceSection />
    </>
  );
}