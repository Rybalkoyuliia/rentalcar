import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    img {
      width: 120px;
    }
  }

  ${media.tablet} {
    a {
      img {
        width: 100px;
      }
    }
  }

  ${media.mobile} {
    justify-content: space-between;

    a {
      img {
        width: 80px;
      }
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  font-weight: 500;
  font-size: 16px;
  ${media.tablet} {
    gap: 16px;
  }
  ${media.mobile} {
    gap: 8px;
    justify-content: space-between;
  }
`;
