import { Button } from "@/components/ui/button"


const QuizControls = () => {

    const handleNext = () => {

    }
  return (
    <div className="flex justify-between  mx-6">
        <Button>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
    </div>
  )
}

export default QuizControls