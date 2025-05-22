import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rentalcarReducer } from "./slice.js";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rentalcarReducer);

export const store = configureStore({
  reducer: {
    rentalcar: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
