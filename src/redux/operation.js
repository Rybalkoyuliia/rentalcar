import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../services/carsApi";

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (
    {
      page = 1,
      brand = "",
      rentalPrice = "",
      minMileage = "",
      maxMileage = "",
    },
    thunkAPI
  ) => {
    try {
      const { data } = await carsApi.get("/cars", {
        params: {
          page,
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBrandsThunk = createAsyncThunk(
  "fetchBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await carsApi.get("/brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarByIdThunk = createAsyncThunk(
  "fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await carsApi.get(`/cars/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue({
          status: 404,
          message: "Car not found",
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
