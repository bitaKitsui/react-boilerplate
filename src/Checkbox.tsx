import { type FC, useReducer } from "react";
import { CHECKBOXES_LIST_ITEMS, HEADING_ID } from "./const";
import { checkboxesReducer } from "./reducers";

export const Checkbox: FC = () => {
  const [_state, dispatch] = useReducer(
    checkboxesReducer,
    CHECKBOXES_LIST_ITEMS,
  );

  return (
    <div>
      <h3 id={HEADING_ID}>Sandwich Condiments</h3>
      <div role="group" aria-labelledby={HEADING_ID}>
        <ul className="checkboxes">
          {CHECKBOXES_LIST_ITEMS.map((item) => (
            <li key={item.label}>
              <label>
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
