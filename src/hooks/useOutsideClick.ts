import { type RefObject, useCallback, useEffect } from "react";

export const useOutsideClick = (
  handleClose: () => void,
  ref: RefObject<any>,
): void => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      const isExistRefElement =
        ref?.current?.contains != null &&
        !ref.current.contains(event.target as Node);
      if (isExistRefElement) {
        handleClose();
      }
    },
    [handleClose, ref],
  );

  useEffect(() => {
    document.addEventListener("mouseup", handleClick);
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [handleClick]);
};
