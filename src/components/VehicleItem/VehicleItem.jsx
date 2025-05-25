import React from "react";
import { Button } from "../Button/Button";
import {
  StyledImgWrapper,
  StyledTitleWrapper,
  StyledDescList,
  StyledVehicleItem,
  StyledDescListLower,
  Heart,
  StyledLazyImage,
} from "./VehicleItem.styled";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation } from "react-router-dom";
import { addressParts } from "../../helper/addressParts";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites, toggleFavorite } from "../../redux/slice";
import sprite from "/sprite.svg";

const VehicleItem = (props) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = props;

  const location = useLocation();

  const addressPart = addressParts(address);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((car) => car.id === id);
  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(props));
  };

  return (
    <StyledVehicleItem>
      <StyledImgWrapper>
        <StyledLazyImage
          src={img}
          effect="blur"
          wrapperClassName="image-wrapper"
          alt={`${brand} ${model} ${year}`}
        />
      </StyledImgWrapper>
      <Heart onClick={toggleFavoriteHandler} style={{ cursor: "pointer" }}>
        {isFavorite ? (
          <svg
            width="16"
            height="16"
            aria-label="filled heart"
            role="img"
            fill="var(--button)"
          >
            <use href={`${sprite}#filled-heart`} />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            aria-label="empty heart"
            role="img"
            fill="var(--white)"
          >
            <use href={`${sprite}#heart`} />
          </svg>
        )}
      </Heart>

      <StyledTitleWrapper>
        <h4>
          {brand} <span>{model}</span>, {year}
        </h4>
        <p>{rentalPrice}$</p>
      </StyledTitleWrapper>

      <StyledDescList>
        <li>{addressPart[1]}</li>
        <li>{addressPart[2]}</li>
        <li>{rentalCompany}</li>
      </StyledDescList>
      <StyledDescListLower>
        <li>{type}</li>
        <li>{mileage.toLocaleString()} km</li>
      </StyledDescListLower>

      <Button
        text="Read more"
        to={location.pathname.includes("catalog") ? `${id}` : `catalog/${id}`}
      />
    </StyledVehicleItem>
  );
};

export default VehicleItem;
