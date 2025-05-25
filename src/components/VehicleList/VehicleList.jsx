import React from "react";
import VehicleItem from "../VehicleItem/VehicleItem";
import { StyledList } from "./VehicleList.styled";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/slice";

const VehicleList = () => {
  const cars = useSelector(selectCars);

  return (
    <StyledList>
      {cars?.map((car) => (
        <VehicleItem key={car.id} {...car} />
      ))}
    </StyledList>
  );
};

export default VehicleList;
