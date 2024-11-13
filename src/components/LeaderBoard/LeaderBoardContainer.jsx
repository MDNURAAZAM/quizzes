import { useSelector } from "react-redux";
import { useGetQuizAttemptsQuery } from "../../features/api/QuizTaking/quizTakingApi";
import {
  getCorrectlyAnsweredList,
  getRankingsList,
  getTotalMarks,
} from "../../utils";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Header from "../Header/Header";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import LeaderBoardProfile from "./LeaderBoardProfile";
import LeaderBoardRankings from "./LeaderBoardRankings";
import { useParams } from "react-router-dom";

const LeaderBoardContainer = () => {
  const { user } = useSelector((state) => state?.auth);
  const { quizSetId } = useParams();

  const { data, isLoading, isError, error } = useGetQuizAttemptsQuery(
    { quizSetId },
    { skip: quizSetId?.length === 0 }
  );

  const { attempts, quiz } = data?.data || {};

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }

  const rankings = getRankingsList(attempts);

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
  const rank = rankings?.findIndex((rank) => rank?.user?.id === user?.id) + 1;

  return (
    <div className="bg-[#F5F3FF]  p-4">
      <Header />
      <main className="min-h-[calc(100vh-15vh)] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <LeaderBoardProfile
              name={user?.full_name}
              position={rank}
              mark={totalMarks}
              correct={correctAnswersCount}
              wrong={wrongAnswerCount}
            />
            <LeaderBoardRankings quiz={quiz} rankings={rankings} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderBoardContainer;
