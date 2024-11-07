import React from "react";
import cardImage from "../../assets/cards/js.png";

const CardItem = ({ isCompleted = false }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer">
      {isCompleted && (
        <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
      )}
      <img
        src={cardImage}
        alt="JavaScript Hoisting"
        className={`w-full h-full object-cover rounded mb-4 ${!isCompleted && "transition-all group-hover:scale-105"}`}
      />
    </div>
  );
};

export default CardItem;
