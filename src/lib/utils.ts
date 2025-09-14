// clsx for conditional class names and classvalue type
import { clsx, type ClassValue } from "clsx";
// tailwind merge to merge conflicting tailwind classes intelligently  
import { twMerge } from "tailwind-merge";

// utility function to merge class names properly handling tailwind conflicts
export function cn(...inputs: ClassValue[]) {
  // first combine classes with clsx then merge tailwind conflicts with twmerge
  return twMerge(clsx(inputs));
}
