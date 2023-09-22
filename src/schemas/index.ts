import { z } from "zod";
import { type CATEGORIES, CATEGORIES_PARAMETERS } from "../const";

const newsCategoriesSchema = z.union([
  z.literal(CATEGORIES_PARAMETERS.business),
  z.literal(CATEGORIES_PARAMETERS.entertainment),
  z.literal(CATEGORIES_PARAMETERS.general),
  z.literal(CATEGORIES_PARAMETERS.health),
  z.literal(CATEGORIES_PARAMETERS.science),
  z.literal(CATEGORIES_PARAMETERS.sports),
  z.literal(CATEGORIES_PARAMETERS.technology),
]);

const newsArticleSchema = z.object({
  source: z.object({
    id: z.string(),
    name: z.string(),
  }),
  author: z.string().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  url: z.string().url(),
  urlToImage: z.string().url().nullable(),
  publishedAt: z.string().datetime(),
  content: z.string().nullable(),
});

const newsTopHeadLineSchema = z.object({
  status: z.union([z.literal("ok"), z.literal("error")]),
  totalResults: z.number().min(0),
  articles: z.array(newsArticleSchema),
});

export const newsCardSchema = z.object({
  url: z.string().url(),
  urlToImage: z.string().url().nullable(),
  title: z.string(),
  description: z.string().nullable(),
});

export type Categories = {
  [Key in (typeof CATEGORIES)[number]]: string;
};

export type CategoriesTitle = {
  key: (typeof CATEGORIES)[number];
  value: string;
};

export type NewsCategory = z.infer<typeof newsCategoriesSchema>;
export type NewsTopHeadLine = z.infer<typeof newsTopHeadLineSchema>;
