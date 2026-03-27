import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageIntro } from "@/components/page-intro";
import { PageContactCta } from "@/components/page-contact-cta";
import { ServicesWorkSection } from "@/components/services-work-section";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "WEBNOVA usluge uključuju izradu web stranica, webshopove, AI integracije, digitalni marketing i održavanje.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Usluge"
          title="Sve što tvome brendu treba, na jednom mjestu."
          description="Web stranica, webshop, AI integracija ili digitalni marketing, savršen paket te čeka."
        />
        <ServicesWorkSection />
        <PageContactCta
          title="Treba ti konkretan prijedlog za tvoj projekt?"
          description="Ako već znaš što ti treba ili želiš zajedno definirati najbolji smjer, javi se preko kontakt stranice."
          buttonLabel="Otvori kontakt"
        />
      </main>
      <SiteFooter />
    </>
  );
}