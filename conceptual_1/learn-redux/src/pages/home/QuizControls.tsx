import { Button } from "@/components/ui/button";
import { nextQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControls = () => {
  const { userAnswer, currentQuestionIndex } = useAppSelector(
    (state) => state.quizReducer
  );
  const dispatch = useAppDispatch();
  const isAnsSelected = userAnswer[currentQuestionIndex] !== null;
  const handleNext = () => {
    if (isAnsSelected) {
      dispatch(nextQuestion());
    }
  };
  return (
    <div className="flex justify-between  mx-6">
      <Button>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default QuizControls;
