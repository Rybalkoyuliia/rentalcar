import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const StyledVehicleItem = styled.li`
  width: 276px;
  position: relative;
`;

export const StyledImgWrapper = styled.div`
  position: relative;

  height: 268px;
  border-radius: 12px;
  overflow: hidden;
  .image-wrapper {
    width: 100%;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(18, 20, 23, 0.5) 0%,
      rgba(18, 20, 23, 0) 100%
    );
    pointer-events: none;
  }
`;

export const StyledLazyImage = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Heart = styled.button`
  background-color: transparent;
  svg {
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
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
