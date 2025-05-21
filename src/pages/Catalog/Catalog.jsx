import React from "react";
import { StyledWrapper } from "./Catalog.styled";
import FiltrationForm from "../../components/FiltrationForm/FiltrationForm";
import VihicleList from "../../components/VehicleList/VihicleList";
import LoadMore from "../../components/LoadMore/LoadMore";

const Catalog = () => {
  return (
    <StyledWrapper>
      <FiltrationForm />
      <VihicleList />
      <LoadMore />
    </StyledWrapper>
  );
};

export default Catalog;
