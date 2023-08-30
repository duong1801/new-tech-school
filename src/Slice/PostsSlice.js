import {
  combineReducers,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import postsRequest from "../Request/PostsRequest";

//fetch sort posts
export const fetchSortPosts = createAsyncThunk(
  "posts/fetchSortPosts",
  async (page) => {
    const response = await postsRequest.sortPostsDesc(page);
    return response
  }
);


//fetch post detail
export const fetchPostDetail = createAsyncThunk(
  "posts/fetchPostDetail",
  async (id) => {
    const response = await postsRequest.getPostDetail(id);
    return response.data;
  }
);

//fetch sort home posts
export const fetchSortHomePosts = createAsyncThunk(
  "posts/fetchSortHomePosts",
  async () => {
    const response = await postsRequest.sortPostsHomeDesc();
    return response.data;
  }
);

export const SortPostsSlice = createSlice({
  name: "sortPosts",
  initialState: {
    listSortPosts: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSortPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSortPosts.fulfilled, (state, action) => {
        state.listSortPosts = {
          data: action.payload.data,
          meta: action.payload.meta,
          statusCode: action.payload.statusCode
        };
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSortPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const PostDetailSlice = createSlice({
  name: "postDetail",
  initialState: {
    postDetail: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostDetail.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.postDetail = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const SortPostsHomeSlice = createSlice({
  name: "sortPostsHome",
  initialState: {
    listPostsHome: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSortHomePosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSortHomePosts.fulfilled, (state, action) => {
        state.listPostsHome = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSortHomePosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default combineReducers({
  sortPosts: SortPostsSlice.reducer,
  listPostsHome: SortPostsHomeSlice.reducer,
  postDetail: PostDetailSlice.reducer,
});
