import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer/productsReducer";
import { productsApi } from "./services/products/productsApi";
import queryReducer from "./reducers/queryReducer/queryReducer";

const store = configureStore({
  reducer: {
    query: queryReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
