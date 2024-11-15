const OptionAdmin = ({ option, isAnswer }) => {
  const backgroundColor = isAnswer ? "bg-green-100" : "bg-primary/5";
  return (
    <div
      className={`${backgroundColor} relative flex items-center justify-center space-x-3 py-3 px-5 rounded-md text-lg`}
    >
      <div>{option}</div>
    </div>
  );
};

export default OptionAdmin;
