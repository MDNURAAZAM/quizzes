const QuizOption = ({ text, isChecked, onOptionSelect, disabled }) => {
  return (
    <label className="flex items-center space-x-3 py-3 px-4 bg-primary/5 rounded-md text-lg">
      <input
        disabled={disabled}
        checked={isChecked}
        onChange={() => onOptionSelect(text)}
        type="checkbox"
        name="answer1"
        className="form-radio text-buzzr-purple"
      />
      <span>{text}</span>
    </label>
  );
};

export default QuizOption;
