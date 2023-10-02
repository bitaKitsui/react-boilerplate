import { type ComponentProps, type FC, useRef, useEffect } from "react";
import "./Dialog.css";
import { useEscapeKey } from "./hooks/useEscapeKey.ts";
import { useOutsideClick } from "./hooks/useOutsideClick.ts";

type Props = ComponentProps<"dialog"> & {
  handleClose: () => void;
};

export const Dialog: FC<Props> = ({ open, handleClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEscapeKey(handleClose);
  useOutsideClick(handleClose, dialogRef);

  useEffect(() => {
    if (noButtonRef.current != null) {
      noButtonRef.current.focus();
    }
  }, [open]);

  return (
    <dialog open={open} className="dialog" ref={dialogRef}>
      <h2>Confirmation</h2>
      <div>
        <p>Are you sure want to discard all of your notes?</p>
      </div>
      <div>
        <button type="button" onClick={handleClose} ref={noButtonRef}>
          No
        </button>
        <button type="button" onClick={handleClose}>
          Yes
        </button>
      </div>
    </dialog>
  );
};
