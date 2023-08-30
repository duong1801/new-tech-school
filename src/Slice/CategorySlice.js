import {
  combineReducers,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import categoryRequest from "../Request/CategoryRequest";

export const fetchAllCategory = createAsyncThunk(
  "authors/fetchAllCategory",
  async () => {
    const response = await categoryRequest.getCategory();
    return response.data;
  }
);

export const fetchPostsByTag = createAsyncThunk(
  "authors/fetchAllTag",
  async (tagID) => {
    const response = await categoryRequest.getPostsByTag(tagID);

    return response.data;
  }
);


export const fetchPostsByCategory = createAsyncThunk(
  "authors/fetchPostsByCategory",
  async (categoryID) => {
    const response = await categoryRequest.getPostsByCategory(categoryID);
    return response.data;
  }
);

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAllCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const PostsByCategorySlice = createSlice({
  name: "postsCategory",
  initialState: {
    postsCategory: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostsByCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
        state.postsCategory = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchPostsByCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});


export const PostsByTagsSlice = createSlice({
  name: "postsTag",
  initialState: {
    postsTag: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostsByTag.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPostsByTag.fulfilled, (state, action) => {
        state.postsTag = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchPostsByTag.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});


export default combineReducers({
  category: CategorySlice.reducer,
  postsCategory: PostsByCategorySlice.reducer,
  postsTag: PostsByTagsSlice.reducer
});
