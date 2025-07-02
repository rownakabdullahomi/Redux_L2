import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    // {
    //   id: "guihuykjhk",
    //   title: "Init Frontend",
    //   description: "Create home page and routing",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "high",
    // },
    // {
    //   id: "g80980uykjhk",
    //   title: "Init Github",
    //   description: "Create github repo and push",
    //   dueDate: "2025-11",
    //   isCompleted: false,
    //   priority: "medium",
    // },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.tasks.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.taskR.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.taskR.filter;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
