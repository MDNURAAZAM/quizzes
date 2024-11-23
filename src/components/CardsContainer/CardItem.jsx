import { useNavigate } from "react-router-dom";
import { useGetQuizDetailsQuery } from "../../features/api/quizTaking/quizTakingApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const CardItem = ({ quiz }) => {
  const isLoggedIn = useAuth();

  const { is_attempted, title, id, thumbnail, description } = quiz || {};

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
          className="z-50 hidden absolute transition-all bg-black/90 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center"
        >
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
      )}

      <div onClick={handleQuizClick}>
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-cover rounded mb-4`}
        />
        <div className="absolute top-[30%] text-center text-white">
          {title && (
            <h3
              style={{ fontFamily: "Jaro" }}
              className={`${!quizDone && "transition-all group-hover:scale-105"} text-6xl `}
            >
              {title}
            </h3>
          )}
          <p
            className={`${!quizDone && "transition-all group-hover:scale-105"} text-xl  mt-2 p-2`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
