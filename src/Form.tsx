import { type FC, type MouseEventHandler, useState } from "react";
import { createPortal } from "react-dom";
import { Dialog } from "./Dialog.tsx";

export const Form: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClickDiscardButton: MouseEventHandler<HTMLButtonElement> = () => {
    setShowModal((previous) => !previous);
  };

  const handleClickCloseButton = (): void => {
    setShowModal(false);
  };

  return (
    <>
      <label htmlFor="notes">Notes</label>
      <textarea className="notes" name="notes" id="notes" rows={7}></textarea>
      <div
        className="visually-hidden"
        id="notes_save_status"
        role="alert"
      ></div>
      <button type="button" id="notes_save">
        Save
      </button>
      <button
        type="button"
        data-textbox="notes"
        onClick={handleClickDiscardButton}
      >
        Discard
      </button>
      {showModal &&
        createPortal(
          <Dialog open={showModal} handleClose={handleClickCloseButton} />,
          document.body,
        )}
    </>
  );
};
