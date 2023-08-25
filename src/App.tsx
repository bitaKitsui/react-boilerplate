import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useReducer,
  useState,
} from "react";
import "./App.css";
import { v4 as uuidV4 } from "uuid";
import { INITIAL_TODOS } from "./constants";
import { filterReducer, todoReducer } from "./reducers";
import { type Todo } from "./types";

export const App: FC = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, INITIAL_TODOS);
  const [task, setTask] = useState("");

  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") {
      return true;
    }
    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }
    return filter === "INCOMPLETE" && !todo.complete;
  });
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setTask(target.value);
  };

  const handleChangeCheckbox = (todo: Todo): void => {
    dispatchTodos({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task !== "") {
      dispatchTodos({ type: "ADD_TODO", task, id: uuidV4() });
    }
    setTask("");
  };

  const handleShowAll = (): void => {
    dispatchFilter({ type: "SHOW_ALL" });
  };
  const handleShowComplete = (): void => {
    dispatchFilter({ type: "SHOW_COMPLETE" });
  };
  const handleShowIncomplete = (): void => {
    dispatchFilter({ type: "SHOW_INCOMPLETE" });
  };
  return (
    <div>
      <div>
        <button type="button" onClick={handleShowAll}>
          Show All
        </button>
        <button type="button" onClick={handleShowComplete}>
          Show Complete
        </button>
        <button type="button" onClick={handleShowIncomplete}>
          Show Incomplete
        </button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => {
                  handleChangeCheckbox(todo);
                }}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};
