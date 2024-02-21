import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND, PRODUCTS } from "../../../config/endpoints";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page }) => `${PRODUCTS}?page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
