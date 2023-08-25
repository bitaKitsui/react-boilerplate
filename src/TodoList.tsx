import { type FC } from "react";
import { TodoItem } from "./TodoItem.tsx";
import { type Todo } from "./types";

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
