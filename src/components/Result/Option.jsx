import { TiTick } from "react-icons/ti";

const Option = ({ option, isAnswer, submittedAnswer }) => {
  const isSelected = option === submittedAnswer;
  const backgroundColor = isAnswer
    ? "bg-green-100"
    : submittedAnswer == option
      ? "bg-red-200"
      : "bg-primary/5";
  return (
    <div
      className={`${backgroundColor} relative flex items-center justify-center space-x-3 py-3 px-5 rounded-md text-lg`}
    >
      <div className="absolute left-2">
        {isSelected && <TiTick className="text-primary text-2xl" />}
        {/* {!isAnswer && option === submittedAnswer && (
          <ImCross className="text-red-600 text-sm" />
        )} */}
      </div>

      <div>{option}</div>
    </div>
  );
};

export default Option;
