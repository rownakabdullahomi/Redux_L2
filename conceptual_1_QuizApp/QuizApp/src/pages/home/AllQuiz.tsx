import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";

const AllQuiz = () => {
  const { data: quizzes, isLoading } = useGetAllQuizQuery(undefined);
  console.log(quizzes, isLoading);
  if (isLoading)
    return <div className="flex justify-center items-center">Loading..</div>;




  return <div className="grid grid-cols-4 gap-2 text-center mb-6">
    {
      quizzes.map(quiz  => <Card>
        <h3>{quiz.title}</h3>
        <p>{quiz.description}</p>
      </Card>)
    }
  </div>;
};

export default AllQuiz;
