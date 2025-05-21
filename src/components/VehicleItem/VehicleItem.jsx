import React from "react";
import img from "../../assets/image 1.png";
import { Button } from "../Button/Button";
import heart from "../../assets/Heart.svg";
import {
  StyledImgWrapper,
  StyledTitleWrapper,
  StyledDescList,
  StyledVehicleItem,
  StyledDescListLower,
  Heart,
} from "./VehicleItem.styled";

const VehicleItem = () => {
  return (
    <StyledVehicleItem>
      <StyledImgWrapper>
        <img src={img} alt="Vehicle" />
      </StyledImgWrapper>
      <Heart>
        <img src={heart} alt="heart icon" />
      </Heart>
      <StyledTitleWrapper>
        <h4>
          Buick <span>Enclave</span>, 2008
        </h4>
        <p>40$</p>
      </StyledTitleWrapper>

      <StyledDescList>
        <li>Kiev</li>
        <li>Ukraine</li>
        <li>Luxury Car Rentals</li>
      </StyledDescList>
      <StyledDescListLower>
        <li>Suv</li>
        <li>9 582 km</li>
      </StyledDescListLower>

      <Button text="Read more" />
    </StyledVehicleItem>
  );
};

export default VehicleItem;
