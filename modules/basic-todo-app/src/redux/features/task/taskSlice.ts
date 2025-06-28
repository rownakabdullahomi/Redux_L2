import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low"
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "guihuykjhk",
      title: "Init Frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "g80980uykjhk",
      title: "Init Github",
      description: "Create github repo and push",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.taskR.tasks;
}
export const selectFilter = (state: RootState) => {
  return state.taskR.filter;
}

export default taskSlice.reducer;
