import axios from "axios";
import { type NewsTopHeadLine } from "../schemas";

export const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 3000,
  headers: { "X-Api-Key": "9bb5e88b0d634b5b8eabaf97f94ed6dc" },
});

export const getTopHeadLinesNews = async (
  category: string,
): Promise<NewsTopHeadLine | undefined> => {
  if (category != null) {
    const { data } = await instance.get<NewsTopHeadLine>(
      `/top-headlines?category=${category}&country=jp`,
    );
    return data;
  }
  const { data } = await instance.get<NewsTopHeadLine>(
    "/top-headlines?country=jp",
  );
  return data;
};
