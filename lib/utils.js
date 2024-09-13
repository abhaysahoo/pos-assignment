import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { skills } from "@/constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getData = async (index) => {
  return {
      skill: skills[index],
      pages: skills.length,
    };
}