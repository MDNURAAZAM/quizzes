import React from "react";
import LeaderBoardRankItem from "./LeaderBoardRankItem";

const LeaderBoardRankings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <p className="mb-6">React Hooks Quiz</p>
      <ul className="space-y-4">
        <LeaderBoardRankItem />
        <LeaderBoardRankItem />
        <LeaderBoardRankItem />
        <LeaderBoardRankItem />
      </ul>
    </div>
  );
};

export default LeaderBoardRankings;
