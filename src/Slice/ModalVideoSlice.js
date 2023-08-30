import { createSlice } from "@reduxjs/toolkit";

export const ModalVideoSlice = createSlice({
  name: "modalVideo",
  initialState: {
    modalVideoData: {},
    toOpen: false,
  },
  reducers: {
    getModalVideo: (state, action) => {
      state.modalVideoData = action.payload;
    },
    openModalVideo: (state, action) => {
      state.toOpen = true;
    },
    closeModalVideo: (state, action) => {
      state.toOpen = false;
    },
  },
});
export const { getModalVideo, openModalVideo, closeModalVideo } =
  ModalVideoSlice.actions;

export default ModalVideoSlice.reducer;
