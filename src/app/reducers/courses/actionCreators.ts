import { createAsyncThunk } from "@reduxjs/toolkit";
import LessonService from "../../../services/lesson.service";
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (thunkAPI) => {
    try {
      const response = await LessonService.getInfo();
      return {
        data: response.data.pageProps.courseData,
      };
    } catch (e: any) {}
  }
);
