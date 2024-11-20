import LeaderBoardRankItem from "./LeaderBoardRankItem";

const LeaderBoardRankings = ({ quiz, rankings }) => {
  const { title } = quiz || {};
  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <p className="mb-6">{title}</p>
      <ul className="space-y-4">
        {rankings?.slice(0, 5)?.map((ranking) => (
          <LeaderBoardRankItem key={ranking?.id} ranking={ranking} />
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoardRankings;
