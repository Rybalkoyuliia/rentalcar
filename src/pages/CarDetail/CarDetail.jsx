import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarByIdThunk } from "../../redux/operation";
import { selectCar, selectIsError } from "../../redux/slice";
import Loader from "../../components/Loader/Loader";
import { PageContainer } from "./CarDetail.styled";
import "react-datepicker/dist/react-datepicker.css";
import DetailedImg from "../../components/DetailedImg/DetailedImg";
import BookingForm from "../../components/BookingForm/BookingForm";
import InfoDetailes from "../../components/InfoDetailes/InfoDetailes";
import { toast } from "react-toastify";

const CarDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const car = useSelector(selectCar);
  const error = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchCarByIdThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error?.status === 404) {
      toast.error("Car not found");
      setTimeout(() => {
        navigate("/not-found", { replace: true });
      }, 1000);
    }
  }, [error, navigate]);

  if (!car || error?.status === 404) {
    return <Loader />;
  }

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
