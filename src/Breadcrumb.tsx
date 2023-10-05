import { type FC } from "react";
import "./Breadcrumb.css";
import { NavLink } from "react-router-dom";
import { type BreadcrumbLinkType } from "./types";

type Props = {
  listItems: readonly BreadcrumbLinkType[];
};

export const Breadcrumb: FC<Props> = ({ listItems }) => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="list">
        {listItems.map((item) => (
          <li className="list-item" key={item.title}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
};
