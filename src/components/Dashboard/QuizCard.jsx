import QuizSVG from "../SVGs/QuizSVG";
import QuizDeleteContainer from "./QuizDeleteContainer";
import QuizEditContainer from "./QuizEditContainer";

const QuizCard = ({ quiz }) => {
  const { title, description, id } = quiz || {};

  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer">
      <div className="text-buzzr-purple mb-4 transition-all">
        <div className="flex items-center justify-between">
          <QuizSVG />
          <div className="flex items-center justify-between gap-2">
            <QuizEditContainer quiz={quiz} />
            <QuizDeleteContainer quizSetId={id} />
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
        {title}
      </h3>
      <p className=" text-gray-600 text-sm group-hover:scale-105 transition-all">
        {description}
      </p>
    </div>
  );
};

export default QuizCard;
