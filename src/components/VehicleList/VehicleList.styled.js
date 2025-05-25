import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  justify-items: center;
  gap: 48px 16px;
  margin-bottom: 124px;
  @media screen and (max-width: 768px) {
    margin-bottom: 76px;
  }
  @media screen and (max-width: 360px) {
    margin-bottom: 38px;
  }
`;
