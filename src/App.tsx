import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from "react";
import "./App.css";
import { v4 as uuidV4 } from "uuid";
import { INITIAL_TODOS } from "./constants";
import { type Todo } from "./types";

export const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [task, setTask] = useState("");
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setTask(target.value);
  };

  const handleChangeCheckbox = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task !== "") {
      setTodos(todos.concat({ id: uuidV4(), task, complete: false }));
    }
    setTask("");
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => {
                  handleChangeCheckbox(todo.id);
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
