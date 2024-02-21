import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND, PRODUCTS } from "../../../config/endpoints";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, perPage }) => ({ url: `${PRODUCTS}?page=${page}&per_page=${perPage}`, method: "GET" }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
