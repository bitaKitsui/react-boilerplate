import {
  type ChangeEventHandler,
  type FC,
  type FormEventHandler,
  useContext,
  useState,
} from "react";
import { v4 as uuidV4 } from "uuid";
import { TodoContext } from "./App.tsx";

export const AddTodo: FC = () => {
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task !== "") {
      if (dispatch != null) {
        dispatch({ type: "ADD_TODO", task, id: uuidV4() });
      }
    }
    setTask("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTask(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
};
