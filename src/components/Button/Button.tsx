import { ComponentPropsWithoutRef, FC } from "react";
import { styled } from "@stitches/react";

export type Props = ComponentPropsWithoutRef<"button"> & {
  color?: "primary" | "secondary" | "error";
  outlined?: boolean;
};

export const Button: FC<Props> = ({
  value,
  children,
  color = "primary",
  outlined = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      outlined={outlined}
      disabled={disabled}
      styledDisabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const disabledStyles = {
  backgroundColor: "#293643",
  color: "#69727C",
  pointerEvents: "none",
};

const StyledButton = styled("button", {
  borderRadius: "9999px",
  border: "0",
  cursor: "pointer",
  color: "#0D1E0E",
  padding: "10px 24px",
  fontsize: "14px",
  boxSizing: "border-box",
  transition: "0.3s",

  variants: {
    color: {
      primary: {
        backgroundColor: "#90C9F9",
        "&:hover": {
          backgroundColor: "#43A5F5",
        },
      },
      secondary: {
        backgroundColor: "#CE93D8",
        "&:hover": {
          backgroundColor: "#AB46BB",
        },
      },
      error: {
        backgroundColor: "#F34436",
        color: "#FCF0EF",
        "&:hover": {
          backgroundColor: "#D3302F",
        },
      },
    },
    outlined: {
      true: {
        backgroundColor: "transparent",
      },
    },
    styledDisabled: {
      true: {
        ...disabledStyles,
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      outlined: true,
      styledDisabled: false,
      css: {
        border: "1px solid #43A5F5",
        color: "#43A5F5",
        "&:hover": {
          backgroundColor: "#F6FAFE",
        },
      },
    },
    {
      color: "primary",
      outlined: true,
      styledDisabled: true,
      css: { ...disabledStyles },
    },
    {
      color: "secondary",
      outlined: true,
      styledDisabled: false,
      css: {
        border: "1px solid #AB46BB",
        color: "#AB46BB",
        "&:hover": {
          backgroundColor: "#FBF6FB",
        },
      },
    },
    {
      color: "secondary",
      outlined: true,
      styledDisabled: true,
      css: { ...disabledStyles },
    },
    {
      color: "error",
      outlined: true,
      styledDisabled: false,
      css: {
        border: "1px solid #D3302F",
        color: "#D3302F",
        "&:hover": {
          backgroundColor: "#FEEFEE",
        },
      },
    },
    {
      color: "error",
      outlined: true,
      styledDisabled: true,
      css: { ...disabledStyles },
    },
  ],
});
