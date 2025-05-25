import styled from "styled-components";

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

  @media screen and (max-width: 768px) {
    a {
      img {
        width: 100px;
      }
    }
  }

  @media screen and (max-width: 320px) {
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
  @media screen and (max-width: 768px) {
    gap: 16px;
  }
  @media screen and (max-width: 320px) {
    gap: 8px;
    justify-content: space-between;
  }
`;
