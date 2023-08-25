export type Todo = {
  id: string;
  task: string;
  complete: boolean;
};

export type FilterState = "ALL" | "COMPLETE" | "INCOMPLETE";

export type FilterAction = {
  type: "SHOW_ALL" | "SHOW_COMPLETE" | "SHOW_INCOMPLETE";
};

export type TodoAction = {
  id?: string;
  task?: string;
  type: "DO_TODO" | "UNDO_TODO" | "ADD_TODO";
};
