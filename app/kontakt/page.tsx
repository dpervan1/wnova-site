import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageIntro } from "@/components/page-intro";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Pošalji upit za projekt i javi što ti treba. WEBNOVA odgovara s konkretnim prijedlogom za web, webshop, AI ili marketing.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Kontakt"
          title="Javi se kad želiš pokrenuti ozbiljniji digitalni projekt."
          description="Pošalji osnovne informacije o projektu, trenutnom stanju i što želiš postići. Nakon toga vraćamo se s konkretnim smjerom i prijedlogom sljedećih koraka."
        />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}