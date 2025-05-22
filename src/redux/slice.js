import { createSlice } from "@reduxjs/toolkit";
import { fetchBrandsThunk, fetchCarsThunk } from "./operation";

const initialState = {
  cars: [],
  loading: false,
  isError: null,
  favorites: [],
  brands: [],
};

const slice = createSlice({
  name: "rentalcar",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
        state.isError = false;
      })
      .addCase(fetchCarsThunk.pending, (state) => {
        state.loading = true;
        state.isError = false;
      })
      .addCase(fetchCarsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isError = payload;
      })
      .addCase(fetchBrandsThunk.fulfilled, (state, { payload }) => {
        state.brands = payload;
      }),
  selectors: {
    selectCars: (state) => state.cars,
    selectLoading: (state) => state.loading,
    selectIsError: (state) => state.isError,
    selectFavorites: (state) => state.favorites,
    selectBrands: (state) => state.brands,
  },
});

export const rentalcarReducer = slice.reducer;
export const {
  selectCars,
  selectLoading,
  selectIsError,
  selectFavorites,
  selectBrands,
} = slice.selectors;
