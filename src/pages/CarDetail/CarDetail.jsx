import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarByIdThunk } from "../../redux/operation";
import { selectCar } from "../../redux/slice";
import Loader from "../../components/Loader/Loader";
import { PageContainer } from "./CarDetail.styled";
import "react-datepicker/dist/react-datepicker.css";
import DetailedImg from "../../components/DetailedImg/DetailedImg";
import BookingForm from "../../components/BookingForm/BookingForm";
import InfoDetailes from "../../components/InfoDetailes/InfoDetailes";

const CarDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCar);

  useEffect(() => {
    dispatch(fetchCarByIdThunk(id));
  }, [dispatch, id]);

  if (!car) {
    return <Loader />;
  }

  return (
    <PageContainer>
      <div>
        <DetailedImg car={car} />
        <BookingForm />
      </div>

      <InfoDetailes car={car} />
    </PageContainer>
  );
};

export default CarDetail;
