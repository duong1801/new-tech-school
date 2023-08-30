import {
  combineReducers, createAsyncThunk, createSlice
} from "@reduxjs/toolkit";
import authorRequest from "../Request/AuthorsRequest";

//fetch all author
export const fetchAllAuthors = createAsyncThunk(
  "authors/fetchAllAuthors",
  async () => {
    const response = await authorRequest.getAuthors();
    return response.data;
  }
);

//fetch author
export const fetchDetailAuthor = createAsyncThunk(
  "authors/fetchDetailAuthor",
  async (slug) => {
    const response = await authorRequest.getAuthor(slug);
    return response.data;
  }
);

export const AuthorsSlice = createSlice({
  name: "authors",
  initialState: {
    listAuthors: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllAuthors.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllAuthors.fulfilled, (state, action) => {
        state.listAuthors = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllAuthors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const DetailAuthorSlice = createSlice({
  name: "author",
  initialState: {
    detailAuthor: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailAuthor.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchDetailAuthor.fulfilled, (state, action) => {
        state.detailAuthor = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchDetailAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default combineReducers({
  allAuthors: AuthorsSlice.reducer,
  detailAuthor: DetailAuthorSlice.reducer,
});
