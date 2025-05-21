import React from "react";
import { StyledButton } from "./Button.styled";

export const Button = ({
  text,
  width = "276px",
  height = "44px",
  to = "/",
}) => {
  return (
    <StyledButton to={to} width={width} height={height}>
      {text}
    </StyledButton>
  );
};
