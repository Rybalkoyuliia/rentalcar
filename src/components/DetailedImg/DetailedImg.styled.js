import styled from "styled-components";
import { media } from "../../helper/breakPoints.styled";

export const StyledImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 5 / 4;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--gray-light);

  .car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    aspect-ratio: 4 / 3;
  }

  ${media.mobile} {
    aspect-ratio: 4 / 3;
  }
`;
