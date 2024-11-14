import { Link } from "react-router-dom";
import CircularProgessBar from "../CircularProgressBar/CircularProgessBar";

const ResultSummary = ({ quiz, correct, wrong, marks }) => {
  const { id, title, description, total_marks, total_questions } = quiz || {};

  const precentage = Math.round((marks / total_marks) * 100);
  return (
    <div className="max-h-screen overflow-hidden hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center p-12 relative">
      <div>
        <div className="text-white">
          <div>
            <h2 className="text-4xl font-bold mb-2">{title} Quiz</h2>
            <p>{description}</p>
          </div>

          <div className="my-6 flex items-center  ">
            <div className="w-1/2">
              <div className="flex gap-6 my-6">
                <div>
                  <p className="font-semibold text-2xl my-0">
                    {total_questions}
                  </p>
                  <p className="text-gray-300">Questions</p>
                </div>

                <div>
                  <p className="font-semibold text-2xl my-0">{correct}</p>
                  <p className="text-gray-300">Correct</p>
                </div>

                <div>
                  <p className="font-semibold text-2xl my-0">{wrong}</p>
                  <p className="text-gray-300">Wrong</p>
                </div>
              </div>

              <Link
                to={`/leaderboard/${id}`}
                // href="./leaderboard_page.html"
                className="  py-3 rounded-md  transition-colors text-lg font-medium underline text-white"
              >
                View Leaderboard
              </Link>
            </div>

            <div className="w-1/2 bg-primary/80 rounded-md border border-white/20 flex items-center p-4">
              <div className="flex-1">
                <p className="text-2xl font-bold">
                  {marks}/{total_marks}
                </p>
                <p>Your Mark</p>
              </div>
              <div>
                <CircularProgessBar percentage={precentage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
