import PublishButton from "./PublishButton";
import SetQuestionForm from "./SetQuestionForm";

const SetQuestionContainer = ({
  editQuestion,
  description,
  title,
  questionsCount,
  setEditQuestionId,
  isPublished,
}) => {
  return (
    <div className="max-h-screen">
      <div className="flex items-center justify-between pr-3">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {questionsCount > 0 && (
          <PublishButton
            isPublished={isPublished}
            title={title}
            description={description}
          />
        )}
      </div>

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
