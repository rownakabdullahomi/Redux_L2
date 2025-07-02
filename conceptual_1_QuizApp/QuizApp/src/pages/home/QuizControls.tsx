import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControls = () => {
  const { questions, userAnswer, currentQuestionIndex, quizComplete } = useAppSelector(
    (state) => state.quizReducer
  );
  const dispatch = useAppDispatch();
  const isAnsSelected = userAnswer[currentQuestionIndex] !== null;
  const handleNext = () => {
    if (isAnsSelected) {
      dispatch(nextQuestion());
    }
  };
  const handlePrevious = () => {
      dispatch(previousQuestion());
  };

    const isCompleteEnabled =
    isAnsSelected || currentQuestionIndex !== questions.length - 1;

    // Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  return (
    <div className="flex justify-between  mx-6">
      <Button onClick={handlePrevious}>Previous</Button>
       {/* Next Button */}
      {currentQuestionIndex < questions.length - 1 && !quizComplete && (
        <Button onClick={handleNext} disabled={!isAnsSelected}>
          Next
        </Button>
      )}
       {/* Complete Quiz Button */}
      {currentQuestionIndex === questions.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControls;
