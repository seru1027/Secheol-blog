export const CATEGORIES = ["Project", "DevLog", "Insights"] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<Category, string> = {
  Project: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  DevLog: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Insights: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};
