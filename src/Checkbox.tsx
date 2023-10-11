import { createRef, type FC, useCallback, useEffect, useReducer } from "react";
import { CHECKBOXES_LIST_ITEMS, HEADING_ID } from "./const";
import { checkboxesReducer } from "./reducers";

export const Checkbox: FC = () => {
  const checkboxRefs = CHECKBOXES_LIST_ITEMS.map(() =>
    createRef<HTMLLabelElement>(),
  );

  const [_state, dispatch] = useReducer(
    checkboxesReducer,
    CHECKBOXES_LIST_ITEMS,
  );

  useEffect(() => {
    if (checkboxRefs[0].current != null) {
      checkboxRefs[0].current?.focus();
    }
  }, [checkboxRefs]);

  const handleEnterKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Enter") {
      dispatch({ type: "CHECK", id: "lettuce" });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleEnterKey, false);
    return () => {
      document.removeEventListener("keyup", handleEnterKey, false);
    };
  }, [handleEnterKey]);

  return (
    <div>
      <h3 id={HEADING_ID}>Sandwich Condiments</h3>
      <div role="group" aria-labelledby={HEADING_ID}>
        <ul className="checkboxes">
          {CHECKBOXES_LIST_ITEMS.map((item) => (
            <li key={item.label}>
              <label className="checkbox-label" ref={checkboxRefs[item.index]}>
                <input
                  id={item.id}
                  type="checkbox"
                  tabIndex={0}
                  onChange={() => {
                    dispatch({ type: "CHECK", id: item.id });
                  }}
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
