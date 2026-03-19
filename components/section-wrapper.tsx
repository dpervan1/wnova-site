import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionWrapper<T extends ElementType = "section">({
  as,
  children,
  className,
  innerClassName,
  ...props
}: SectionWrapperProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={cn("px-4 sm:px-6 lg:px-8", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </Component>
  );
}