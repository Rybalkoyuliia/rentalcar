import styled from "styled-components";

export const StyledNotFound = styled.div`
  text-align: center;
  padding: 80px 16px;
  color: var(--main);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 96px;
    margin-bottom: 24px;
    font-weight: 800;
  }

  p {
    font-size: 20px;
    margin-bottom: 32px;
  }

  a {
    font-size: 16px;
    color: var(--button);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
