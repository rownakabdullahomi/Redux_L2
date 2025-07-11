import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    taskR: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
