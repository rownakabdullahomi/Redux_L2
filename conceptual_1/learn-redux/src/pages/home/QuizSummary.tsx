import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

const QuizSummary = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <h3>You got 7 out of 10</h3>
          <div>
            <Progress value={33} />
            <div>
              <span>70%</span>
              <span>Performance: Good</span>
            </div>

            <div>
              <p>
                <strong>Incorrect Answers: </strong>3
              </p>
            </div>

            <div>
              <p>Great Job! Keep practicing</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
