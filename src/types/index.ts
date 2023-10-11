export type CheckboxesState = { id: string; label: string; checked: boolean };
export type CheckboxesAction = {
  type: "CHECK";
  id: string;
};
