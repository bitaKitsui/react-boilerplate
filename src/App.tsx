import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useState,
} from "react";
import "./App.css";
import { useStore } from "./hooks/useStore.ts";

const DisplayTodos: FC = () => {
  const { todos, toggleTodo, deleteTodo } = useStore((state) => {
    return {
      todos: state.todos,
      toggleTodo: state.toggleTodo,
      deleteTodo: state.deleteTodo,
    };
  });
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => {
            toggleTodo(todo.id);
          }}
        >
          {todo.text}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const TodosControl: FC = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");
  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (text === "") return;
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChangeInput} />
      <button>Add</button>
    </form>
  );
};

export const App: FC = () => {
  return (
    <>
      <DisplayTodos />
      <TodosControl />
    </>
  );
};
