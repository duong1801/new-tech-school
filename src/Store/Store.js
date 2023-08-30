import { configureStore } from "@reduxjs/toolkit";
import AuthorsSlice from "../Slice/AuthorsSlice";
import CoursesSlice from "../Slice/CoursesSlice";
import CategorySlice from "../Slice/CategorySlice";
import DarkModeSlice from "../Slice/DarkModeSlice";
import modalFormSlice from "../Slice/ModalFormSlice";
import ModalVideoSlice from "../Slice/ModalVideoSlice";
import modalPaymentSlice from "../Slice/ModalPayment";
import NavBarTabletSlice from "../Slice/NavBarTabletSlice";
import PaymentsSlice from "../Slice/PaymentsSlice";
import PostsSlice from "../Slice/PostsSlice";
import SearchSlice from "../Slice/SearchSlice";
import UserSlice from "../Slice/UserSlice";

const rootReducer = {
  authors: AuthorsSlice,
  category: CategorySlice,
  courses: CoursesSlice,
  darkMode: DarkModeSlice,
  modalForm: modalFormSlice,
  modalPayment: modalPaymentSlice,  
  modalVideo: ModalVideoSlice,
  navbarTablet: NavBarTabletSlice,
  posts: PostsSlice,
  payments: PaymentsSlice,
  searchResult: SearchSlice,
  user:UserSlice
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
