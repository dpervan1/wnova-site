import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageIntro } from "@/components/page-intro";
import { AboutSection } from "@/components/about-section";
import { ResultsSection } from "@/components/results-section";
import { PageContactCta } from "@/components/page-contact-cta";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "Saznaj kako WEBNOVA spaja web, AI automatizaciju i marketing u funkcionalne digitalne sustave za rast poslovanja.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="O nama"
          title="Gradimo digitalne sustave koji moraju imati rezultat."
          description="WEBNOVA nije složen oko generičkih webova, nego oko funkcionalnih rješenja koja trebaju pomoći firmi da izgleda ozbiljno, radi brže i lakše dolazi do klijenata."
        />
        <AboutSection />
        <ResultsSection />
        <PageContactCta
          title="Ako želiš vidjeti kako to može izgledati za tvoj biznis, javi se."
          description="Kontakt stranica je sljedeći korak ako želiš razgovarati o projektu, ponudi ili konkretnom smjeru izvedbe."
          buttonLabel="Prijeđi na kontakt"
        />
      </main>
      <SiteFooter />
    </>
  );
}