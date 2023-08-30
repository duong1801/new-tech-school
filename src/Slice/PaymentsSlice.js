import {
  createSlice,
  createAsyncThunk,
  combineReducers,
} from "@reduxjs/toolkit";
import paymentsRequest from "../Request/PaymentsRequest";

export const fetchPayments = createAsyncThunk(
  "posts/fetchPayments",
  async () => {
    const response = await paymentsRequest.getPayments();
    return response.data;
  }
);

export const PaymentsSlice = createSlice({
  name: "payments",
  initialState: {
    payments: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPayments.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.payments = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default combineReducers({
  payments: PaymentsSlice.reducer,
});
