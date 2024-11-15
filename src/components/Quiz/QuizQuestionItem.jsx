import { useMemo } from "react";
import QuizOption from "./QuizOption";
import { shuffleList } from "../../utils";

const QuizQuestionItem = ({
  currentQuestion,
  index,
  answers,
  setAnswers,
  disabled,
}) => {
  const { id, question, options } = currentQuestion || {};

  const shuffleOptions = useMemo(() => {
    return shuffleList(options);
  }, [options]);

  //handle options selection
  const handleOptionSelect = (value) => {
    const alreadySelected = answers[id] === value;
    if (alreadySelected) {
      setAnswers((prev) => ({ ...prev, [id]: "" }));
    } else {
      setAnswers((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">
          {index + 1}. {question}
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {shuffleOptions?.map((option) => (
          <QuizOption
            key={option}
            text={option}
            isChecked={answers[id] === option}
            onOptionSelect={handleOptionSelect}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
};

export default QuizQuestionItem;
