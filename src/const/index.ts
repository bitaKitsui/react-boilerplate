import { type BreadcrumbLinkType } from "../types";

export const LIST_ITEMS = [
  { path: "apg", title: "WAI-ARIA Authoring Practices Guide (APG)" },
  { path: "apg/patterns", title: "Patterns" },
  { path: "apg/patterns/breadcrumb-pattern", title: "Breadcrumb Pattern" },
  {
    path: "apg/patterns/breadcrumb-pattern/breadcrumb-example",
    title: "Breadcrumb Example",
  },
] as const satisfies readonly BreadcrumbLinkType[];
