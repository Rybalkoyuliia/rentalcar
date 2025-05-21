import styled from "styled-components";

export const StyledVehicleItem = styled.li`
  width: 276px;
  position: relative;
`;

export const StyledImgWrapper = styled.div`
  height: 268px;
  border-radius: 12px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;
export const Heart = styled.button`
  background-color: transparent;
  img {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    color: var(--main);
    font-weight: var(--font-main-weight);
    span {
      color: var(--button);
    }
  }
`;

export const StyledDescList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
  margin-bottom: 4px;

  li {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray);
    padding-right: 6px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 16px;
      background-color: var(--gray-light);
    }
  }
`;

export const StyledDescListLower = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;

  li {
    font-weight: 400;
    font-size: 12px;
    color: var(--gray);
    padding-right: 6px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 16px;
      background-color: var(--gray-light);
    }
  }

  li:last-child::after {
    display: none;
  }
`;
