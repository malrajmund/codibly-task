import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    clearPagination: (state: QueryState) => ({
      ...state,
      page: 1,
    }),
    setQueryProp: (state: QueryState, action: PayloadAction<QueryPayload>) => ({
      ...state,
      [action.payload.prop]: action.payload.value,
    }),
  },
});

export const { clearPagination, setQueryProp } = querySlice.actions;

export default querySlice.reducer;
