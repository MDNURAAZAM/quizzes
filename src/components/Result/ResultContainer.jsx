import Logo from "../../assets/logo-white.svg";
import ResultSummary from "./ResultSummary";
import ResultQuestions from "./ResultQuestions";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetQuizAttemptsQuery } from "../../features/api/QuizTaking/quizTakingApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getCorrectlyAnsweredList, getTotalMarks } from "../../utils";

const ResultContainer = () => {
  const { user } = useSelector((state) => state?.auth);
  const { quizSetId } = useParams();

  const { data, isLoading, isError, error } = useGetQuizAttemptsQuery(
    { quizSetId },
    { skip: quizSetId?.length === 0 }
  );

  const { attempts, quiz } = data?.data || {};

  console.log(quiz);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }

  const currentUserAttempt = attempts?.find(
    (attempt) => attempt?.user?.id === user?.id
  );
  const { correct_answers, submitted_answers } = currentUserAttempt || {};
  const correctlyAnsweredList = getCorrectlyAnsweredList(
    correct_answers,
    submitted_answers
  );

  const correctAnswersCount = correctlyAnsweredList?.length;
  const wrongAnswerCount = correct_answers?.length - correctAnswersCount;
  const totalMarks = getTotalMarks(correctlyAnsweredList);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <Link to={"/"}>
          <img src={Logo} className="max-h-11 fixed left-6 top-6 z-50" />
        </Link>
        <ResultSummary
          quiz={quiz}
          correct={correctAnswersCount}
          wrong={wrongAnswerCount}
          marks={totalMarks}
        />
        <ResultQuestions />
      </div>
    </div>
  );
};

export default ResultContainer;
