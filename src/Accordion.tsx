import { type FC, useReducer } from "react";
import { ACCORDION_GROUP_ID, ACCORDIONS_TRIGGERS } from "./const";
import { accordionTriggersReducer } from "./reducers";
import "./Accordion.css";

export const Accordion: FC = () => {
  const [state, dispatch] = useReducer(
    accordionTriggersReducer,
    ACCORDIONS_TRIGGERS,
  );
  return (
    <div id={ACCORDION_GROUP_ID} className="accordion">
      {state.map((trigger) => (
        <div key={trigger.id}>
          <h3>
            <button
              type="button"
              aria-expanded={trigger.expand}
              id={trigger.id}
              className="accordion-trigger button"
              aria-controls={trigger.id}
              onClick={() => {
                dispatch({ type: "TOGGLE", id: trigger.id });
              }}
            >
              <span className="accordion-title">
                {trigger.title}
                <span className="accordion-icon"></span>
              </span>
            </button>
          </h3>
          <div
            key={trigger.section.id}
            id={trigger.section.id}
            role="region"
            className="accordion-panel"
            hidden={!trigger.expand}
          >
            {trigger.section.inputs.map((input) => (
              <div key={input.id}>
                <fieldset>
                  <p>
                    <label htmlFor={input.id}>
                      {input.label}
                      <span aria-hidden={true}>*</span>:
                    </label>
                    <input
                      type="text"
                      value=""
                      name={input.name}
                      id={input.id}
                      className="required"
                      aria-required={true}
                    />
                  </p>
                </fieldset>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
