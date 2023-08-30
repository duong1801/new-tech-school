import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../Configs/tech2ApiClient";
import coursesRequest from "../Request/CoursesRequest";
import userRequest from "../Request/UserRequest";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {

      const { data } = await userRequest.getLogin({ email, password });

      if (data !== undefined) {
        // store user's token in local storage
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data["access_token"]}`;
        localStorage.setItem("token", JSON.stringify(data));
      }
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ name, phone, email, password }, { rejectWithValue }) => {
    try {

      const { data } = await userRequest.getRegister({
        name,
        phone,
        email,
        password,
      });

      if (data.status === 200 || data !== undefined) {
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data["access_token"]}`;
        localStorage.setItem(
          "token",
          JSON.stringify({
            access_token: data.access_token,
            expired: data.expired,
            refresh_token: data.refresh_token,
          })
        );
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetail = createAsyncThunk(
  "user/getUserDetail",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const data = await userRequest.getUserInfo();
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchMyCourse = createAsyncThunk(
  "course/fetchMyCourse",
  async () => {
    const response = await coursesRequest.getMyCourse();
    return response.courses;
  }
);


// initialize userToken from local storage
const userToken = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initialState = {
  myCourse:[],
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.myCourse = []
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = {
        access_token: payload.access_token,
        refresh_token:payload.refresh_token,
        expired:payload.expired
      };
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get user details
    [getUserDetail.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getUserDetail.rejected]: (state, { payload }) => {
      state.loading = false;
    },

    // fetch course belong to user
    [fetchMyCourse.pending]: (state) =>{
      state.loading = true;
      state.error = false;
    },
    [fetchMyCourse.fulfilled]: (state,action) =>{
      state.myCourse = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchMyCourse.rejected]: (state) =>{
      state.loading = false;
      state.error = true;
    }
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
