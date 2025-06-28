import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import QuizControls from "./QuizControls";

const Question = () => {

    

  const { questions, currentQuestionIndex, userAnswer } = useAppSelector(
    (state) => state.quizReducer
  );
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  const handleAnswer = (ans: string) => {
    console.log(ans);
  }
  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          {/* <CardDescription>{}</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button onClick={()=>handleAnswer(option)} className="w-full mt-3" key={index}>
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <QuizControls />
      </Card>
    </div>
  );
};

export default Question;
