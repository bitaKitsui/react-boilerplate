import {
  type AccordionTriggersAction,
  type AccordionTriggersState,
} from "../types";

export const accordionTriggersReducer = (
  state: AccordionTriggersState,
  action: AccordionTriggersAction,
): AccordionTriggersState => {
  switch (action.type) {
    case "TOGGLE":
      return state.map((trigger) => {
        const isSameId = trigger.id === action.id;
        if (isSameId) {
          return { ...trigger, expand: !trigger.expand };
        } else {
          return trigger;
        }
      });
    default:
      throw new Error();
  }
};
