import { useNavigate } from "react-router-dom";
import { useGetQuizDetailsQuery } from "../../features/api/QuizTaking/quizTakingApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const CardItem = ({ quiz }) => {
  const isLoggedIn = useAuth();

  const { is_attempted, thumbnail, title, id } = quiz || {};

  const { data, isLoading, isError, error } = useGetQuizDetailsQuery(
    { quizSetId: id },
    { skip: id?.length === 0 || !isLoggedIn }
  );
  const { attempted } = data?.data?.user_attempt || {};

  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setQuizDone(attempted);
    } else {
      setQuizDone(is_attempted);
    }
  }, [isLoggedIn, attempted, is_attempted]);

  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate(`/quiz/${id}`);
  };

  const handleLeaderboardClick = () => {
    navigate(`/leaderboard/${id}`);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer">
      {quizDone && (
        <div
          onClick={handleLeaderboardClick}
          className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center"
        >
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
      )}
      <img
        onClick={handleQuizClick}
        src={thumbnail}
        alt={title}
        className={`w-full h-full object-cover rounded mb-4 ${!quizDone && "transition-all group-hover:scale-105"}`}
      />
    </div>
  );
};

export default CardItem;
