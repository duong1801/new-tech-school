import { createSlice } from "@reduxjs/toolkit";

export const modalPaymentSlice = createSlice({
  name: "modal-Payment",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModalPayment: (state, action) => {
      state.isOpen = true;
    },
    closeModalPayment: (state, action) => {
      state.isOpen = false;
    },
  },
});
export const { openModalPayment, closeModalPayment } =
  modalPaymentSlice.actions;

export default modalPaymentSlice.reducer;
