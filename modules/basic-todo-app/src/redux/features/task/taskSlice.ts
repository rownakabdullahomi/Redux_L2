import { createSlice } from "@reduxjs/toolkit";



const initialState = {
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
