import { useSelector } from "react-redux";
import { formatOrdinal } from "../../utils";
import Avatar from "../Images/Avatar";

const LeaderBoardRankItem = ({ ranking }) => {
  const { user, marks, rank } = ranking || {};
  const { user: loggedInUser } = useSelector((state) => state?.auth);
  const isRanked = user?.id === loggedInUser.id;
  return (
    <li
      className={`flex items-center justify-between ${isRanked && "bg-green-100 rounded-l-full border border-primary"}`}
    >
      <div className="flex items-center">
        <img
          src={Avatar}
          alt={user?.full_name}
          className="object-cover w-10 h-10 rounded-full mr-4"
        />
        <div className="">
          <h3 className="font-semibold">{user?.full_name}</h3>
          <p className="text-sm text-gray-500">{formatOrdinal(rank)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="mr-2">{marks}</span>
      </div>
    </li>
  );
};

export default LeaderBoardRankItem;
