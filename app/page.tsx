import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { ResultsSection } from "@/components/results-section";
import { ServicesSection } from "@/components/services-section";
import { CtaSection } from "@/components/cta-section";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WEBNOVA",
  url: "https://wnova.cc",
  logo: "https://wnova.cc/brand/wnova-logo-main.png",
  email: "info@wnova.cc",
  sameAs: ["https://www.instagram.com/wnova.cc/"],
  description:
    "WEBNOVA izrađuje web stranice, webshopove i digitalne kampanje za firme koje žele ozbiljniji online nastup, više upita i bolju vidljivost.",
  areaServed: "HR",
  priceRange: "€€",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@wnova.cc",
    availableLanguage: ["hr", "en"],
  },
  serviceType: [
    "Izrada web stranica",
    "Izrada webshopova",
    "AI integracije",
    "SEO optimizacija",
    "Digitalni marketing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WEBNOVA",
  url: "https://wnova.cc",
  inLanguage: "hr",
  publisher: {
    "@type": "Organization",
    name: "WEBNOVA",
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "WEBNOVA",
  url: "https://wnova.cc",
  description:
    "Izrada web stranica, webshopova, AI integracija i digitalnog marketinga za firme koje žele ozbiljniji online nastup.",
  inLanguage: "hr",
  isPartOf: {
    "@type": "WebSite",
    name: "WEBNOVA",
    url: "https://wnova.cc",
  },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "WEBNOVA usluge",
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Izrada web stranica" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Izrada webshopova" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI integracije" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO optimizacija" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digitalni marketing" } },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AboutSection />
        <ResultsSection />
        <ServicesSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}