import DeleteSVG from "../SVGs/DeleteSVG";
import EditSVG from "../SVGs/EditSVG";
import QuizSVG from "../SVGs/QuizSVG";

const QuizCard = ({ quiz }) => {
  const { title, description } = quiz || {};
  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-sm border border-gray-200 group cursor-pointer">
      <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
        <div className="flex items-center justify-between">
          <QuizSVG />
          <div className="flex items-center justify-between gap-2">
            <button>
              <EditSVG />
            </button>
            <button>
              <DeleteSVG />
            </button>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
        {title} Quiz
      </h3>
      <p className=" text-gray-600 text-sm group-hover:scale-105 transition-all">
        {description}
      </p>
    </div>
  );
};

export default QuizCard;
