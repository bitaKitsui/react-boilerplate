import { type CheckboxesAction, type CheckboxesState } from "../types";

export const checkboxesReducer = (
  state: CheckboxesState[],
  action: CheckboxesAction,
): CheckboxesState[] => {
  switch (action.type) {
    case "CHECK":
      return state.map((checkbox) => {
        const isSameId = checkbox.id === action.id;
        if (isSameId) {
          return { ...checkbox, checked: !checkbox.checked };
        } else {
          return checkbox;
        }
      });
    default:
      throw new Error();
  }
};
