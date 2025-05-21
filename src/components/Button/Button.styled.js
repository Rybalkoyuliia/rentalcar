import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: var(--button);
  color: var(--white);
  font-family: var(--font);
  font-weight: var(--font-boolen-weight);
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--button-hover);
  }

  &:active,
  &:focus {
    background-color: var(--main);
  }
`;
