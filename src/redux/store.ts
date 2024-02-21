import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products/productsReducer";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
