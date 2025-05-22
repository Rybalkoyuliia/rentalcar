import React from "react";
import VehicleItem from "../VehicleItem/VehicleItem";
import { StyledList } from "./VehicleList.styled";
import { useSelector } from "react-redux";
import { selectCars, selectLoading } from "../../redux/slice";

const VehicleList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  console.log(cars?.cars);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <StyledList>
      {cars.cars?.map((car) => (
        <VehicleItem key={car.id} {...car} />
      ))}
    </StyledList>
  );
};

export default VehicleList;
