import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICourse } from "../../../types/course.type";
import { fetchCourses } from "./actionCreators";
import { IWord } from "../../../types/word.type";
import { ILesson } from "../../../types/lesson.type";
interface CoursesState {
  courseData: ICourse | null;
  error: string;
  currentWords: IWord[];
}
const initialState: CoursesState = {
  courseData: null,
  error: "",
  currentWords: [],
};
export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    learnLesson(state: CoursesState, action: PayloadAction<ILesson>) {
      state.currentWords = action.payload.words;
      let arrayT = [];
      for (let i = 0; i < state.currentWords.length; i++) {
        let word = state.currentWords[i];
        var item1, item2;
        do {
          item1 =
            action.payload.words[
              Math.floor(Math.random() * action.payload.words.length)
            ];
          item2 =
            action.payload.words[
              Math.floor(Math.random() * action.payload.words.length)
            ];
        } while (
          item1.code === item2.code ||
          item1.code === word.code ||
          item2.code === word.code
        );
        word = { ...word, content_random: [item1.content, item2.content] };
        word = { ...word, pinyin_random: [item1.pinyin, item2.pinyin] };
        arrayT.push(word);
      }
      state.currentWords = arrayT;
    },
  },
  extraReducers: {
    [fetchCourses.fulfilled.type]: (
      state: CoursesState,
      action: PayloadAction<{ data: ICourse }>
    ) => {
      state.error = "";
      state.courseData = action.payload.data;
    },
    [fetchCourses.rejected.type]: (state: CoursesState, action) => {
      state.error = "Unable to fetch tags";
    },
  },
});

export default coursesSlice.reducer;
export const { learnLesson } = coursesSlice.actions;
