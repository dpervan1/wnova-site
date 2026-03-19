import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind klase često rastu brzo; ovaj helper drži spajanje predvidljivim.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}