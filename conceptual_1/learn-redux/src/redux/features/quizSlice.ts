import { quizData } from "@/pages/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Define a type for the slice state
interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswer: (string | null)[];
}

// Define the initial state using that type
const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswer[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
  },
});

export const { setAnswer, nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;
