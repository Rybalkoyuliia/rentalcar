import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../axiosConfig/carsApi";

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await carsApi.get("/cars");
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
