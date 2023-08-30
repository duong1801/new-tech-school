import {
  combineReducers,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import searchRequest from "../Request/SearchRequest";

export const fetchSearchResult = createAsyncThunk(
  "search/fetchSearchResult",
  async (param) => {
    let response;
    if (param.length > 1) {
      response = await searchRequest.getSeachResult(param);
    } else if (param.length <= 1) {
      response = [];
    }
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearchResult.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSearchResult.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSearchResult.rejected, (state, action) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default combineReducers({ search: searchSlice.reducer });
