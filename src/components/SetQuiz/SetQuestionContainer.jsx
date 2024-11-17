import SetQuestionForm from "./SetQuestionForm";

const SetQuestionContainer = ({
  editQuestion,
  description,
  title,
  questionsCount,
  setEditQuestionId,
}) => {
  return (
    <div className="max-h-screen">
      <h2 className="text-3xl font-bold mb-4">{title} Quiz</h2>
      <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-4">
        Total number of questions : {questionsCount}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <SetQuestionForm
        editQuestion={editQuestion}
        setEditQuestionId={setEditQuestionId}
      />
    </div>
  );
};

export default SetQuestionContainer;
