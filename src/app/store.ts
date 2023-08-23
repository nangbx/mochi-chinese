import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/courses/coursesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
