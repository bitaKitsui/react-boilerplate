import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "100%",
  minHeight: "100vh",
  padding: "0 300px",
});

export const navigationList = style({
  display: "flex",
  justifyContent: "space-between",
});
