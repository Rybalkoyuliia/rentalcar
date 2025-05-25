import React from "react";
import { specId } from "../../helper/vehicleId";
import { addressParts } from "../../helper/addressParts";
import sprite from "/sprite.svg";
import {
  StyledDesc,
  StyledDescriptionWrapper,
  StyledListsWrapper,
  StyledPrice,
  StyledTitleWrapper,
} from "./InfoDetails.styled";

const InfoDetailes = ({ car }) => {
  const {
    brand,
    model,
    year,
    mileage,
    rentalPrice,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    img,
    address,
  } = car;

  const vehicleId = specId(img);
  const addressPart = addressParts(address);

  return (
    <div>
      <StyledTitleWrapper>
        <h2>
          {brand} <span>{model}</span>, {year}
        </h2>
        <p>Id: {vehicleId}</p>
      </StyledTitleWrapper>
      <StyledDescriptionWrapper>
        <p>
          <svg width="16px" height="16px">
            <use href={`${sprite}#location`} />
          </svg>
          {addressPart[1]}, {addressPart[2]}
        </p>
        <p>Mileage: {mileage.toLocaleString()} km</p>
      </StyledDescriptionWrapper>

      <StyledPrice>${rentalPrice}</StyledPrice>

      <StyledDesc>{description}</StyledDesc>

      <StyledListsWrapper>
        <div>
          <h3>Rental Conditions:</h3>
          <ul>
            {rentalConditions.map((condition, index) => (
              <li key={condition[index]}>
                <svg width="16px" height="16px">
                  <use href={`${sprite}#check-circle`} />
                </svg>
                {condition}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Car Specifications:</h3>
          <ul>
            <li>
              <svg width="16px" height="16px">
                <use href={`${sprite}#calendar`} />
              </svg>
              Year: {year}
            </li>
            <li>
              <svg width="16px" height="16px">
                <use href={`${sprite}#car`} />
              </svg>
              Type: {type}
            </li>
            <li>
              <svg width="16px" height="16px">
                <use href={`${sprite}#fuel-pump`} />
              </svg>
              Fuel Consumption: {fuelConsumption}
            </li>
            <li>
              {" "}
              <svg width="16px" height="16px">
                <use href={`${sprite}#gear`} />
              </svg>
              Engine Size: {engineSize}
            </li>
          </ul>
        </div>
        <div>
          <h3>Accessories and functionalities:</h3>
          <ul>
            {[...accessories, ...functionalities].map((condition) => (
              <li key={condition}>
                <svg width="16px" height="16px">
                  <use href={`${sprite}#check-circle`} />
                </svg>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </StyledListsWrapper>
    </div>
  );
};

export default InfoDetailes;
