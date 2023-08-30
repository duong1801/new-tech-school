import { createSlice } from "@reduxjs/toolkit";

export const NavBarTabletSlice = createSlice({
  name: "navbar-tablet",
  initialState: {
    isOpen: false,
  },
  reducers: {
    showNavbarTablet: (state) => {
      state.isOpen = true;
    },
    hideNavbarTablet: (state) => {
      state.isOpen = false;
    },
  },
});
export const { showNavbarTablet, hideNavbarTablet } = NavBarTabletSlice.actions;

export default NavBarTabletSlice.reducer;
