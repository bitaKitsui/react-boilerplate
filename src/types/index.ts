import { type ACCORDIONS_TRIGGERS } from "../const";

export type AccordionTriggersState = typeof ACCORDIONS_TRIGGERS;

export type AccordionTriggersAction = {
  type: "TOGGLE";
  id: string;
};
