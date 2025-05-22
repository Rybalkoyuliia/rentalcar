import React from "react";
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

const VehicleItem = ({
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const addressParts = address.split(",").map((part) => part.trim());
  return (
    <StyledVehicleItem>
      <StyledImgWrapper>
        <img src={img} alt={`${brand} ${model} ${year}`} />
      </StyledImgWrapper>
      <Heart>
        <img src={heart} alt="heart icon" />
      </Heart>
      <StyledTitleWrapper>
        <h4>
          {brand} <span>{model}</span>, {year}
        </h4>
        <p>{rentalPrice}$</p>
      </StyledTitleWrapper>

      <StyledDescList>
        <li>{addressParts[1]}</li>
        <li>{addressParts[2]}</li>
        <li>{rentalCompany}</li>
      </StyledDescList>
      <StyledDescListLower>
        <li>{type}</li>
        <li>{mileage.toLocaleString()} km</li>
      </StyledDescListLower>

      <Button text="Read more" />
    </StyledVehicleItem>
  );
};

export default VehicleItem;
