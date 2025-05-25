import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBrandsThunk,
  fetchCarByIdThunk,
  fetchCarsThunk,
} from "./operation";

const initialState = {
  cars: [],
  page: 1,
  totalPages: null,
  loading: false,
  isError: null,
  favorites: [],
  brands: [],
  car: null,
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
};

const slice = createSlice({
  name: "rentalcar",
  initialState,
  reducers: {
    filterCars: (state, { payload }) => {
      state.filters = payload;
    },
    toggleFavorite: (state, { payload }) => {
      const index = state.favorites.findIndex((car) => car.id === payload.id);
      if (index === -1) {
        state.favorites.push(payload);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsThunk.fulfilled, (state, { payload }) => {
        const { cars, page, totalPages } = payload;
        if (Number(page) === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }
        state.page = page;
        state.totalPages = totalPages;
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
      })
      .addCase(fetchCarByIdThunk.fulfilled, (state, { payload }) => {
        state.car = payload;
      }),
  selectors: {
    selectCars: (state) => state.cars,
    selectLoading: (state) => state.loading,
    selectIsError: (state) => state.isError,
    selectFavorites: (state) => state.favorites,
    selectBrands: (state) => state.brands,
    selectTotalPages: (state) => state.totalPages,
    selectCar: (state) => state.car,
    selectFilters: (state) => state.filters,
  },
});

export const rentalcarReducer = slice.reducer;
export const { filterCars, toggleFavorite } = slice.actions;
export const {
  selectCars,
  selectLoading,
  selectIsError,
  selectFavorites,
  selectBrands,
  selectTotalPages,
  selectCar,
  selectFilters,
} = slice.selectors;
