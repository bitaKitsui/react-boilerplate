import { useCallback, useEffect } from "react";
import { KEY_EVENT_TYPE, KEY_NAME_ESC } from "../const";

export const useEscapeKey = (handleClose: () => void): void => {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscapeKey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscapeKey, false);
    };
  }, [handleEscapeKey]);
};
