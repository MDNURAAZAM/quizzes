import QuestionItemAdmin from "./QuestionItemAdmin";

const QuestionsContainer = ({ questions }) => {
  return (
    <div className="px-4 max-h-[90vh] overflow-y-scroll">
      {questions?.length > 0 &&
        questions?.map((question, index) => (
          <QuestionItemAdmin
            key={question?.id}
            question={question}
            count={index + 1}
          />
        ))}
    </div>
  );
};

export default QuestionsContainer;
