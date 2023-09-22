import { type Categories, type CategoriesTitle } from "../schemas";

export const CATEGORIES = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
] as const;

export const CATEGORIES_PARAMETERS = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
} as const satisfies Categories;

export const CATEGORIES_TABS_TITLE: CategoriesTitle[] = [
  { key: "general", value: "全体" },
  { key: "business", value: "仕事" },
  { key: "entertainment", value: "エンターテイメント" },
  { key: "health", value: "健康" },
  { key: "science", value: "科学" },
  { key: "sports", value: "スポーツ" },
  { key: "technology", value: "技術" },
];
