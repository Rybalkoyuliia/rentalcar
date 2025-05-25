import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  justify-items: center;
  gap: 48px 16px;
  margin-bottom: 124px;
  ${media.tablet} {
    margin-bottom: 76px;
  }
  ${media.mobile} {
    margin-bottom: 38px;
  }
`;

export const StyledNoResult = styled.p`
  text-align: center;
  font-size: clamp(16px, 2.5vw, 24px);
`;

export const StyledRefresh = styled.p`
  font-size: clamp(14px, 2.5vw, 20px);
  color: var(--gray);
  text-align: center;
  margin-top: 20px;
  button {
    background-color: var(--gray-light);
    padding: 4px 10px;
    border-radius: 12px;
    color: var(--white);

    &:hover {
      background-color: var(--gray);
    }
    &:active {
      background-color: var(--main);
    }
  }
`;
