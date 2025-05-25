import React from "react";
import VehicleItem from "../VehicleItem/VehicleItem";
import {
  StyledList,
  StyledNoResult,
  StyledRefresh,
} from "./VehicleList.styled";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, selectCars } from "../../redux/slice";

const VehicleList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const resetSearch = () => {
    dispatch(resetFilters());
  };

  if (!cars.length) {
    return (
      <>
        <StyledNoResult>
          There are no cars that match your search results. Please try again
          later or enter different search criteria.
        </StyledNoResult>
        <StyledRefresh>
          To refresh search type <button onClick={resetSearch}>here</button>
        </StyledRefresh>
      </>
    );
  }

  return (
    <StyledList>
      {cars.map((car) => (
        <VehicleItem key={car.id} {...car} />
      ))}
    </StyledList>
  );
};

export default VehicleList;
