import { createContext, type Dispatch, type FC, useReducer } from "react";
import "./App.css";
import { AddTodo } from "./AddTodo.tsx";
import { INITIAL_TODOS } from "./constants";
import { Filter } from "./Filter.tsx";
import { filterReducer, todoReducer } from "./reducers";
import { TodoList } from "./TodoList.tsx";
import { type TodoAction } from "./types";

export const TodoContext = createContext<Dispatch<TodoAction> | null>(null);

export const App: FC = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, INITIAL_TODOS);

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

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <Filter dispatch={dispatchFilter} />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </TodoContext.Provider>
  );
};
