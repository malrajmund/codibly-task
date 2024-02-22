import { Middleware, MiddlewareAPI, configureStore, isRejected } from "@reduxjs/toolkit";
import { productsApi } from "./services/products/productsApi";
import queryReducer from "./reducers/queryReducer/queryReducer";
import modalReducer from "./reducers/modalReducer/modalReducer";
import { toast } from "react-toastify";

export const errorHandler: Middleware = (api: MiddlewareAPI) => (next) => (action: any) => {
  if (isRejected(action)) {
    switch (action.payload?.status) {
      case 404:
        toast.error("No results for filter data.");
        break;
      case 500:
        toast.error("Internal server error.");
        break;
      default:
        toast.error("Unknown error occured.");
        break;
    }
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    query: queryReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(errorHandler),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
