import { useGetQuizDetailsQuery } from "../../features/api/quizTaking/quizTakingApi";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import QuestionItem from "./QuestionItem";
import ResultInstructions from "./ResultInstructions";

const ResultQuestions = ({ quizSetId, correctAnswers, submittedAnswers }) => {
  const { data, isLoading, isError, error } = useGetQuizDetailsQuery(
    { quizSetId },
    { skip: quizSetId?.length === 0 }
  );

  const { questions } = data?.data || {};

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }
  return (
    <div className="max-h-screen md:w-1/2 flex flex-col items-center justify-center h-full p-8">
      <div className="h-[calc(100vh-50px)] overflow-y-scroll ">
        <div className="px-4">
          <ResultInstructions />
          {questions?.length > 0 &&
            questions?.map((question, index) => (
              <QuestionItem
                key={question?.id}
                question={question}
                count={index + 1}
                correctAnswers={correctAnswers}
                submittedAnswers={submittedAnswers}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ResultQuestions;
