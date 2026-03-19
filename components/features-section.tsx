import type { SVGProps } from "react";

import { FeatureCard } from "@/components/feature-card";
import { SectionWrapper } from "@/components/section-wrapper";

type FeatureIconProps = SVGProps<SVGSVGElement>;

type FeatureItem = {
  title: string;
  description: string;
  eyebrow: string;
  accentClassName: string;
  icon: (props: FeatureIconProps) => React.JSX.Element;
  offsetClassName?: string;
};

function BrowserIcon(props: FeatureIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="6" width="24" height="20" rx="6" className="stroke-current" strokeWidth="1.6" />
      <path d="M4 12h24" className="stroke-current" strokeWidth="1.6" />
      <circle cx="9" cy="9" r="1.2" className="fill-current" />
      <circle cx="13" cy="9" r="1.2" className="fill-current opacity-70" />
      <path d="M10 20l4-4 3 3 5-5" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon(props: FeatureIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7 9h3l2.1 9.4a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 1.9-1.4L26 12H11" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.5" cy="24" r="1.7" className="stroke-current" strokeWidth="1.6" />
      <circle cx="22.5" cy="24" r="1.7" className="stroke-current" strokeWidth="1.6" />
    </svg>
  );
}

function SparkIcon(props: FeatureIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 5l2.4 6.6L25 14l-6.6 2.4L16 23l-2.4-6.6L7 14l6.6-2.4L16 5Z" className="stroke-current" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24.5 5.5l.9 2.5 2.6.9-2.6.9-.9 2.5-.9-2.5-2.6-.9 2.6-.9.9-2.5Z" className="fill-current opacity-80" />
      <path d="M7.5 20.5l.9 2.5 2.6.9-2.6.9-.9 2.5-.9-2.5-2.6-.9 2.6-.9.9-2.5Z" className="fill-current opacity-65" />
    </svg>
  );
}

function SignalIcon(props: FeatureIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7 23.5 13 17l4 3 8-9" className="stroke-current" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 11h4v4" className="stroke-current" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 26h18" className="stroke-current opacity-70" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// Podaci su izdvojeni iz JSX-a da kartice ostanu jednostavne za održavanje i kasniji CMS/API izvor.
const features: readonly FeatureItem[] = [
  {
    title: "Web development",
    description:
      "Brze, pristupačne i SEO-spremne web stranice građene oko poslovnog cilja, ne oko generičnog templatea.",
    eyebrow: "Brzina + struktura",
    accentClassName: "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]",
    icon: BrowserIcon,
  },
  {
    title: "Webshopovi",
    description:
      "Prodajni sustavi s jasnim UX-om, optimiziranim checkout tokom i tehničkom bazom koja može rasti bez kaosa.",
    eyebrow: "Commerce koji diše",
    accentClassName: "bg-[radial-gradient(circle_at_78%_18%,rgba(218,232,255,0.14),transparent_28%),linear-gradient(165deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]",
    icon: CartIcon,
    offsetClassName: "md:translate-y-5 xl:translate-y-0",
  },
  {
    title: "AI integracije",
    description:
      "Automatizacije, AI asistenti i operativni tokovi koji smanjuju ručni posao i ubrzavaju odgovor prema klijentu.",
    eyebrow: "Pametna automatizacija",
    accentClassName: "bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_26%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]",
    icon: SparkIcon,
    offsetClassName: "xl:translate-y-8",
  },
  {
    title: "Digitalni marketing",
    description:
      "Landing stranice, sadržajni okvir i kampanje koje ne dovode samo promet, nego podržavaju prodajni rezultat.",
    eyebrow: "Vidljivost s razlogom",
    accentClassName: "bg-[radial-gradient(circle_at_top_right,rgba(201,220,244,0.12),transparent_30%),linear-gradient(170deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]",
    icon: SignalIcon,
  },
] as const;

export function FeaturesSection() {
  return (
    <SectionWrapper
      id="usluge"
      aria-labelledby="features-title"
      className="relative pb-20 pt-8 sm:pb-24 lg:pb-28"
    >
      {/* Uvodni blok sada preuzima dio sadržaja koji je prije gušio Hero. */}
      <div className="grid gap-8 border-t border-line/80 pt-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#c5d8ef] shadow-soft">
              Usluge koje nose rezultat
            </p>
            <h2
              id="features-title"
              className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl"
            >
              Četiri područja rada, jedna ideja: web mora služiti rastu poslovanja.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#bfd1e7] sm:justify-self-end sm:text-lg">
            Ovdje prebacujemo detalje koji ne trebaju živjeti u Hero prostoru: način rada,
            širinu usluga i objašnjenje kako WEBNOVA spaja identitet, development i rast.
          </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              eyebrow={feature.eyebrow}
              accentClassName={feature.accentClassName}
              className={feature.offsetClassName}
              icon={<Icon className="h-7 w-7" aria-hidden="true" />}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}