import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "160px",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "10px",
});

export const titleStyle = style({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
});

export const imageStyle = style({
  height: "100%",
});

export const descriptionStyle = style({
  fontSize: "14px",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 5,
});
