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
