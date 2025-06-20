import React from "react";
import { StyledImgWrapper } from "./DetailedImg.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoaderImg from "../LoaderImg/LoaderImg";

const DetailedImg = ({ car }) => {
  return (
    <StyledImgWrapper>
      <LazyLoadImage
        className="car-image"
        src={car.img}
        alt={`${car.brand} ${car.model} ${car.year}`}
        effect="blur"
        placeholder={<LoaderImg />}
      />
    </StyledImgWrapper>
  );
};

export default DetailedImg;
