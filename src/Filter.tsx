import { type Dispatch, type FC } from "react";
import { type FilterAction } from "./types";

type Props = {
  dispatch: Dispatch<FilterAction>;
};

export const Filter: FC<Props> = ({ dispatch }) => {
  const handleShowAll = (): void => {
    dispatch({ type: "SHOW_ALL" });
  };
  const handleShowComplete = (): void => {
    dispatch({ type: "SHOW_COMPLETE" });
  };
  const handleShowIncomplete = (): void => {
    dispatch({ type: "SHOW_INCOMPLETE" });
  };
  return (
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
  );
};
