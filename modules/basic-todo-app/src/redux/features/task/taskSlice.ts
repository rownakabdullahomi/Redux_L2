import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
    {
      id: "guihuykjhk",
      title: "Init Frontend",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
