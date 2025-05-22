import React, { useEffect } from "react";
import { StyledWrapper } from "./Catalog.styled";
import FiltrationForm from "../../components/FiltrationForm/FiltrationForm";
import LoadMore from "../../components/LoadMore/LoadMore";
import { useDispatch } from "react-redux";
import { fetchBrandsThunk, fetchCarsThunk } from "../../redux/operation";
import VehicleList from "../../components/VehicleList/VehicleList";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
    dispatch(fetchBrandsThunk());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <FiltrationForm />
      <VehicleList />
      <LoadMore />
    </StyledWrapper>
  );
};

export default Catalog;
