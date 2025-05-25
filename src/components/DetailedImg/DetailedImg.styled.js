import styled from "styled-components";

export const StyledImgWrapper = styled.div`
  width: 100%;
  max-width: 640px;
  aspect-ratio: 5 / 4;
  height: 100%;
  max-height: 512px;
  overflow: hidden;
  border-radius: 10px;
  .car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    max-width: 325px;
    max-height: 250px;
  }

  @media screen and (max-width: 320px) {
    width: 275px;
    aspect-ratio: 4 / 3;
  }
`;
