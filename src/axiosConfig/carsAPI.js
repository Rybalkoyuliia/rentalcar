import axios from "axios";

export const carsAPI = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});
