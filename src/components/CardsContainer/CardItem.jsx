import React from "react";
import cardImage from "../../assets/cards/js.png";
import { useNavigate } from "react-router-dom";

const CardItem = ({ quiz }) => {
  const { is_attempted, thumbnail, title, id } = quiz || {};
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate(`/quiz/${id}`);
  };

  const handleLeaderboardClick = () => {
    navigate(`/leaderboard/${id}`);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer">
      {is_attempted && (
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
        className={`w-full h-full object-cover rounded mb-4 ${!is_attempted && "transition-all group-hover:scale-105"}`}
      />
    </div>
  );
};

export default CardItem;
