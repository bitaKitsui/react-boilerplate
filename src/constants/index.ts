import { v4 as uuidV4 } from "uuid";
import { type Todo } from "../types";

export const INITIAL_TODOS: Todo[] = [
  {
    id: uuidV4(),
    task: "Learn React",
    complete: true,
  },
  {
    id: uuidV4(),
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: uuidV4(),
    task: "Learn GraphQL",
    complete: false,
  },
];
