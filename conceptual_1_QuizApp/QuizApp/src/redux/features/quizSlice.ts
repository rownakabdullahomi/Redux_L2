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
  quizComplete: boolean;
}

// Define the initial state using that type
const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswer: Array(quizData.length).fill(null),
  quizComplete: false,
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
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
     completeQuiz: (state) => {
      state.quizComplete = true;
    },
  },
});

export const { setAnswer, nextQuestion, previousQuestion, completeQuiz } = quizSlice.actions;
export default quizSlice.reducer;
