import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  eyebrow: string;
  icon: ReactNode;
  accentClassName?: string;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  eyebrow,
  icon,
  accentClassName,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[26px] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-soft transition duration-300 ease-out",
        "hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(1,9,25,0.72)]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 opacity-100 transition duration-300 group-hover:scale-[1.02]",
          accentClassName,
        )}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="bg-white/8 shadow-soft inline-flex h-14 w-14 items-center justify-center rounded-[18px] rounded-tr-[28px] border border-white/10 text-white backdrop-blur-sm">
          {icon}
        </div>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c9dcf4]">
          {eyebrow}
        </span>
      </div>

      <div className="mt-16 space-y-3">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h3>
        <p className="text-sm leading-7 text-[#bfd1e7] sm:text-[15px]">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        <span className="transition duration-300 group-hover:translate-x-1">
          Skrojeno za stvarni poslovni cilj
        </span>
      </div>
    </article>
  );
}