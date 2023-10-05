import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumb.tsx";
import { LIST_ITEMS } from "./const";

export const App: FC = () => {
  return (
    <>
      <Breadcrumb listItems={LIST_ITEMS} />
      <div>
        <Outlet />
      </div>
    </>
  );
};
