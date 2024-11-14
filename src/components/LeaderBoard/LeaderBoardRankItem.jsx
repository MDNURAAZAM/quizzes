import { useSelector } from "react-redux";
import Avatar from "../../assets/avater.webp";
import { formatOrdinal } from "../../utils";

const LeaderBoardRankItem = ({ ranking, rank }) => {
  const { user, marks } = ranking || {};
  const { user: loggedInUser } = useSelector((state) => state?.auth);
  const isRanked = user?.id === loggedInUser.id;
  return (
    <li
      className={`flex items-center justify-between ${isRanked && "bg-green-100 rounded-l-full"}`}
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
