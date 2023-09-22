import { type FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTopHeadLinesNews } from "../../api";
import { NewsCard } from "../atoms/NewsCard.tsx";
import { listContainer } from "./NewsTopHeadlines.css.ts";

export const NewsTopHeadlines: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["headlines"],
    queryFn: async () => await getTopHeadLinesNews("general"),
  });

  return (
    <div>
      <div>{isLoading && <p>isLoading...</p>}</div>
      {!isLoading && data != null && (
        <ul className={listContainer}>
          {data.articles.map((article) => (
            <li key={article.title}>
              <NewsCard
                key={article.title}
                url={article.url}
                urlToImage={article.urlToImage}
                title={article.title}
                description={article.description}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
