import { RootRoute, Route, Router } from "@tanstack/react-router";
import { getTopHeadLinesNews } from "../../api";
import { App } from "../../App.tsx";
import { NewsCategory } from "../../components/pages/NewsCategory.tsx";
import { NewsTopHeadlines } from "../../components/pages/NewsTopHeadlines.tsx";

const rootRoute = new RootRoute({ component: App });

const generalRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: NewsTopHeadlines,
});

const categoryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$category",
  component: NewsCategory,
  loader: async ({ params: { category } }) => {
    return await getTopHeadLinesNews(category);
  },
});

const routeTree = rootRoute.addChildren([generalRoute, categoryRoute]);
const router = new Router({ routeTree });

export default router;
