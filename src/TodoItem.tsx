import { type FC, useContext } from "react";
import { TodoContext } from "./App.tsx";
import { type Todo } from "./types";

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useContext(TodoContext);
  const handleChange = (): void => {
    if (dispatch != null) {
      dispatch({
        type: todo.complete ? "UNDO_TODO" : "DO_TODO",
        id: todo.id,
      });
    }
  };
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};
