import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData: (state: ModalState, action: PayloadAction<ModalState>) => ({
      ...state,
      data: { ...state.data, ...action.payload.data },
      isActive: action.payload.isActive,
    }),
    closeModal: (state: ModalState) => ({
      ...state,
      isActive: false,
    }),
  },
});

export const { setModalData, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
