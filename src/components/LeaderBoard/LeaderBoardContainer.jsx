import React from "react";
import Header from "../Header/Header";
import LeaderBoardProfile from "./LeaderBoardProfile";
import LeaderBoardRankings from "./LeaderBoardRankings";
import { useParams } from "react-router-dom";

const LeaderBoardContainer = () => {
  const { quizSetId } = useParams();
  return (
    <div className="bg-[#F5F3FF]  p-4">
      <Header />
      <main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <LeaderBoardProfile />
            <LeaderBoardRankings />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderBoardContainer;
