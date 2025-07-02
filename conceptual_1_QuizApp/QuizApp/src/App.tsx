import "./App.css";
import Question from "./pages/home/Question";
import QuizSummary from "./pages/home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quizReducer);
  return (
    <div className="">
      <h1 className="text-center text-7xl my-12">Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App;
