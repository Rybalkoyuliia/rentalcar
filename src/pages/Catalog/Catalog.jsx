import React, { useEffect, useState } from "react";
import { StyledWrapper } from "./Catalog.styled";
import FiltrationForm from "../../components/FiltrationForm/FiltrationForm";
import LoadMore from "../../components/LoadMore/LoadMore";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrandsThunk, fetchCarsThunk } from "../../redux/operation";
import VehicleList from "../../components/VehicleList/VehicleList";
import {
  resetFilters,
  selectFilters,
  selectLoading,
  selectTotalPages,
} from "../../redux/slice";
import Loader from "../../components/Loader/Loader";
import { animateScroll } from "react-scroll";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [shouldScroll, setShouldScroll] = useState(false);

  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    setPage(1);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    dispatch(fetchCarsThunk({ page, ...filters }));
    dispatch(fetchBrandsThunk());
  }, [dispatch, page, filters]);

  const loading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
    setShouldScroll(true);
  };

  useEffect(() => {
    if (!loading && shouldScroll) {
      animateScroll.scrollMore(500, {
        duration: 500,
        smooth: true,
      });
      setShouldScroll(false);
    }
  }, [loading, shouldScroll]);

  return (
    <StyledWrapper>
      <FiltrationForm />
      <VehicleList />
      {loading ? (
        <Loader />
      ) : (
        page < totalPages && <LoadMore loadMore={onLoadMore} />
      )}
    </StyledWrapper>
  );
};

export default Catalog;
