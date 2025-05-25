import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--badges);
  z-index: 1000;
  padding: 24px 120px;
  width: 100%;

  ${media.tablet} {
    padding: 12px 60px;
  }

  ${media.mobile} {
    padding: 6px 22px;
  }
`;
