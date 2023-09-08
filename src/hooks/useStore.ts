import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoIdHandlerType = (id: number) => void;

type UseStoreType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: TodoIdHandlerType;
  deleteTodo: TodoIdHandlerType;
};

export const useStore = create<UseStoreType>((set) => ({
  todos: [{ id: Date.now(), text: "foo", completed: false }],
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    }));
  },
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
