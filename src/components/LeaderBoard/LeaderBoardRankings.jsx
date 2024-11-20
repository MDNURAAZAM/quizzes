import LeaderBoardRankItem from "./LeaderBoardRankItem";

const LeaderBoardRankings = ({ quiz, rankings }) => {
  const { title } = quiz || {};
  return (
    <div>
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      <p className="mb-6">{title}</p>
      <ul className="space-y-4">
        {rankings?.slice(0, 5)?.map((ranking, index) => (
          <LeaderBoardRankItem
            key={ranking?.id}
            ranking={ranking}
            rank={index + 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default LeaderBoardRankings;
