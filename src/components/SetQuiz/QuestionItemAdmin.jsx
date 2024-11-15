import OptionAdmin from "./OptionAdmin";

const QuestionItemAdmin = ({ question, count }) => {
  const { question: title, options, correctAnswer } = question || {};

  return (
    <div className="rounded-lg overflow-hidden shadow-sm mb-4">
      <div className="bg-white p-6 !pb-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {count}. {title}
          </h3>
        </div>
        <div className=" grid grid-cols-2 gap-4">
          {options?.map((option) => (
            <OptionAdmin
              option={option}
              key={option}
              isAnswer={correctAnswer === option}
            />
          ))}
        </div>

        <div className="flex space-x-4 items-center justify-start bg-primary/10 px-6 py-2 my-3 rounded-md">
          <button className="text-red-600 hover:text-red-800 font-medium">
            Delete
          </button>
          <button className="text-primary hover:text-primary/80 font-medium">
            Edit Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionItemAdmin;
