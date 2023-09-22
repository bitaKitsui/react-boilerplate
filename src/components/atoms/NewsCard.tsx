import { type FC } from "react";
import { type z } from "zod";
import { type newsCardSchema } from "../../schemas";
import {
  container,
  imageStyle,
  descriptionStyle,
  titleStyle,
} from "./NewsCard.css.ts";

type Props = z.infer<typeof newsCardSchema>;

export const NewsCard: FC<Props> = ({
  url,
  urlToImage,
  title,
  description,
}) => {
  return (
    <article className={container}>
      <div>
        <img src={urlToImage ?? ""} alt="" className={imageStyle} />
      </div>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <span className={titleStyle}>{title}</span>
        </a>
        <p className={descriptionStyle}>{description}</p>
      </div>
    </article>
  );
};
