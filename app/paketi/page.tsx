import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageIntro } from "@/components/page-intro";
import { PageContactCta } from "@/components/page-contact-cta";
import { ServicesSection } from "@/components/services-section";

export const metadata: Metadata = {
  title: "Paketi",
  description:
    "Pregled WEBNOVA paketa i projektnih usluga za web stranice, webshopove, AI integracije i mjesečnu podršku.",
};

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Paketi"
          title="Odaberi model suradnje koji odgovara tvom projektu."
          description="Bilo da ti treba nova stranica, veći projekt ili stalna mjesečna podrška, ovdje možeš brzo vidjeti kako pristupamo ponudi i izvedbi."
        />
        <ServicesSection />
        <PageContactCta
          title="Kad odlučiš što ti najviše odgovara, idemo dalje."
          description="Na kontakt stranici pošalji upit i napiši treba li ti web stranica, veći projekt ili mjesečna suradnja."
          buttonLabel="Idi na kontakt"
        />
      </main>
      <SiteFooter />
    </>
  );
}