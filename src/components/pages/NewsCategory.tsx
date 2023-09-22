import { type FC } from "react";
import { useMatch } from "@tanstack/react-router";
import { NewsCard } from "../atoms/NewsCard.tsx";
import { listContainer } from "./NewsCategory.css.ts";

export const NewsCategory: FC = () => {
  const { isFetching, loaderData } = useMatch({ from: "/$category" });

  return (
    <div>
      <div>{isFetching && <p>isLoading...</p>}</div>
      <ul className={listContainer}>
        {!isFetching &&
          loaderData !== null &&
          // FIXME: tanstack-router の useMatch 型定義がよくわからないため any
          loaderData.articles.map((article: any) => (
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
    </div>
  );
};
