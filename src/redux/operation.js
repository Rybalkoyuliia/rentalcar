import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsAPI } from "../axiosConfig/carsApi";

export const fetchCarsThunk = createAsyncThunk(
  "fetchCars",
  async (_, thunkAPI) => {
    try {
      const { data } = await carsAPI.get("/cars");
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
      const { data } = await carsAPI.get("/brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
