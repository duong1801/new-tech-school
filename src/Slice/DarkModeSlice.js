import { createSlice } from "@reduxjs/toolkit";

export const DarkModeSlice = createSlice({
  name: "dark-mode",
  initialState: {
    toggleDarkMode: localStorage.getItem("dark-mode") ? JSON.parse(localStorage.getItem("dark-mode")) : false,
  },
  reducers: {
    toggleMode: (state, action) => {
      state.toggleDarkMode = !state.toggleDarkMode
      localStorage.setItem("dark-mode", JSON.stringify(state.toggleDarkMode));
    }
  },
});
export const { toggleMode } =
  DarkModeSlice.actions;

export default DarkModeSlice.reducer;
