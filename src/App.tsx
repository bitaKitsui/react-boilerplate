import { type FC } from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { container, navigationList } from "./App.css.ts";
import { CATEGORIES_TABS_TITLE } from "./const";

export const App: FC = () => {
  return (
    <div className={container}>
      <header>
        <nav>
          <ul className={navigationList}>
            {CATEGORIES_TABS_TITLE.map((category) => (
              <li key={category.key}>
                <Link
                  search=""
                  params={{ category: category.key }}
                  to="/$category"
                >
                  {category.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
