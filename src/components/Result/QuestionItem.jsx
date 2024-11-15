import Option from "./Option";

const QuestionItem = ({
  question,
  count,
  submittedAnswers = [],
  correctAnswers = [],
}) => {
  const { question: title, options, id } = question || {};

  const correctAnswer = correctAnswers?.find(
    (answer) => answer?.question_id === id
  )?.answer;

  const submittedAnswer = submittedAnswers?.find(
    (answer) => answer?.question_id === id
  )?.answer;

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
            <Option
              option={option}
              key={option}
              isAnswer={correctAnswer === option}
              submittedAnswer={submittedAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
