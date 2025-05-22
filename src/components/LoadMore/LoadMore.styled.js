import styled from "styled-components";

export const StyledLoadMore = styled.button`
  color: var(--main);
  padding: 12px 51px;
  border: 1px solid var(--button);
  border-radius: 12px;
  &:hover,
  &:focus {
    border: 1px solid var(--button-hover);
  }

  &:active {
    background-color: var(--button);
  }
`;

export const StyledLoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 124px;
`;
