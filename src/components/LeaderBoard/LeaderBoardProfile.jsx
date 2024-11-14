import { Link, useParams } from "react-router-dom";
import Avatar from "../Images/Avatar";

const LeaderBoardProfile = ({ name, mark, correct, wrong, position }) => {
  const { quizSetId } = useParams();
  return (
    <div className="bg-primary rounded-lg p-6 text-white">
      <div className="flex flex-col items-center mb-6">
        <img
          src={Avatar}
          alt="Profile Pic"
          className="w-20 h-20 rounded-full border-2 border-white mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-xl">{position} Position</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm opacity-75">Mark</p>
          <p className="text-2xl font-bold">{mark}</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-75">Correct</p>
          <p className="text-2xl font-bold">{correct}</p>
        </div>
        <div className="text-center">
          <p className="text-sm opacity-75">Wrong</p>
          <p className="text-2xl font-bold">{wrong}</p>
        </div>
      </div>
      <div className="text-center">
        <Link
          to={`/result/${quizSetId}`}
          // href="./leaderboard_page.html"
          className="  py-3 rounded-md  transition-colors text-lg font-medium underline text-white"
        >
          View Result
        </Link>
      </div>
    </div>
  );
};

export default LeaderBoardProfile;
