import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { App } from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/apg",
        element: <div>APG</div>,
      },
      { path: "/apg/patterns", element: <div>Patterns</div> },
      {
        path: "/apg/patterns/breadcrumb-pattern",
        element: <div>Breadcrumb Pattern</div>,
      },
      {
        path: "/apg/patterns/breadcrumb-pattern/breadcrumb-example",
        element: <div>Breadcrumb Example</div>,
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
