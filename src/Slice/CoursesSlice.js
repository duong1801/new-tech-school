import {
  combineReducers, createAsyncThunk, createSlice
} from "@reduxjs/toolkit";
import coursesRequest from "../Request/CoursesRequest";

// Fetch Detail Course
export const fetchDetailCourse = createAsyncThunk(
  "courses/fetchDetailCourse",
  async (courseID) => {
    const response = await coursesRequest.getDetailCourse(courseID);
    return response.data;
  }
);

// Fetch Release Course
export const fetchReleaseCourse = createAsyncThunk(
  "courses/fetchReleaseCourse",
  async () => {
    const response = await coursesRequest.getReleaseCourses();
    return response.data;
  }
);

//fetch courses by author
export const fetchCoursesByAuthor = createAsyncThunk(
  "courses/fetchCoursesByAuthor",
  async (slug) => {
    const response = await coursesRequest.getCoursesByAuthor(slug);
    return response.data;
  }
);

//fetch courses by category
export const fetchCoursesByCategory = createAsyncThunk(
  "courses/fetchCoursesByCategory",
  async (category) => {
    const response = await coursesRequest.getCoursesByCategory(category);
    return response.data;
  }
);

//fetch courses by category
export const fetchCoursesByFrontEnd = createAsyncThunk(
  "courses/fetchCoursesByFrontEnd",
  async () => {
    const response = await coursesRequest.getCoursesByFrontEnd();
    return response.data;
  }
);

// Fetch Most Interest Course
export const fetchInterestCourse = createAsyncThunk(
  "courses/fetchInterestCourse",
  async () => {
    const response = await coursesRequest.getInterestCourses();
    return response.data;
  }
);

// Fetch Most Interest Course
export const fetchDiscountCourses = createAsyncThunk(
  "courses/fetchDiscountCourses",
  async () => {
    const response = await coursesRequest.getDiscountCourses();
    return response.data;
  }
);

// Fetch Unrelease Course
export const fetchUnreleaseCourse = createAsyncThunk(
  "courses/fetchUnreleaseCourse",
  async () => {
    const response = await coursesRequest.getUnreleaseCourses();
    return response.data;
  }
);

//Fetch Accordion Content
export const fetchAccordionContent = createAsyncThunk(
  "courses/fetchAccordionContent",
  async (id) => {
    const response = await coursesRequest.makeAccordionContent(id);
    return response.data;
  }
);
//Fetch Course Detail Video
export const fetchLessonCourse = createAsyncThunk(
  "courses/fetchLessonCourse",
  async (videoID) => {
    const response = await coursesRequest.getDetailCourseLesson(videoID);
    return response.data;
  }
);

export const fetchVideoCourse = createAsyncThunk(
  "courses/videoCourse",
  async (lessonID) => {
    const response = await coursesRequest.getDetailVideo(lessonID);
    return response.url;
  }
);


export const DetailCourseSlice = createSlice({
  name: "detail-course",
  initialState: {
    detailCourse: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchDetailCourse.fulfilled, (state, action) => {
        state.detailCourse = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchDetailCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const CourseAuthorSlice = createSlice({
  name: "author-courses",
  initialState: {
    authorCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCoursesByAuthor.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCoursesByAuthor.fulfilled, (state, action) => {
        state.authorCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCoursesByAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const CourseCategorySlice = createSlice({
  name: "category-courses",
  initialState: {
    coursesCategory: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCoursesByCategory.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCoursesByCategory.fulfilled, (state, action) => {
        state.coursesCategory = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCoursesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const CourseFrontEndSlice = createSlice({
  name: "FE-courses",
  initialState: {
    listCoursesFE: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCoursesByFrontEnd.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCoursesByFrontEnd.fulfilled, (state, action) => {
        state.listCoursesFE = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCoursesByFrontEnd.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const releaseCoursesSlice = createSlice({
  name: "release-course",
  initialState: {
    releaseCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReleaseCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchReleaseCourse.fulfilled, (state, action) => {
        state.releaseCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchReleaseCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const unreleaseCoursesSlice = createSlice({
  name: "unrelease-course",
  initialState: {
    unreleaseCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUnreleaseCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUnreleaseCourse.fulfilled, (state, action) => {
        state.unreleaseCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchUnreleaseCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const interestCoursesSlice = createSlice({
  name: "interest-courses",
  initialState: {
    interestCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchInterestCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchInterestCourse.fulfilled, (state, action) => {
        state.interestCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchInterestCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});


export const discountCoursesSlice = createSlice({
  name: "discount-courses",
  initialState: {
    discountCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDiscountCourses.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchDiscountCourses.fulfilled, (state, action) => {
        state.discountCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchDiscountCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const accordionContentSlice = createSlice({
  name: "accordion-course",
  initialState: {
    accordionCourses: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccordionContent.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAccordionContent.fulfilled, (state, action) => {
        state.accordionCourses = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchAccordionContent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const detailLessonSlice = createSlice({
  name: "detail-lesson",
  initialState: {
    detailLesson: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLessonCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchLessonCourse.fulfilled, (state, action) => {
        state.detailLesson = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchLessonCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const detailVideoSlice = createSlice({
  name: "detail-video",
  initialState: {
    detailVideo: {},
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVideoCourse.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchVideoCourse.fulfilled, (state, action) => {
        state.detailVideo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchVideoCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default combineReducers({
  detailCourse: DetailCourseSlice.reducer,
  authorCourses: CourseAuthorSlice.reducer,
  coursesCategory: CourseCategorySlice.reducer,
  listCoursesFE: CourseFrontEndSlice.reducer,
  releaseCourses: releaseCoursesSlice.reducer,
  unreleaseCourses: unreleaseCoursesSlice.reducer,
  interestCourses: interestCoursesSlice.reducer,
  discountCourses: discountCoursesSlice.reducer,
  accordionCourses: accordionContentSlice.reducer,
  detailLesson: detailLessonSlice.reducer,
  detailVideo:detailVideoSlice.reducer,
});
