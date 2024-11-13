import { useState } from "react";
import QuizQuestionItem from "./QuizQuestionItem";
import { useSubmitQuizAttemptMutation } from "../../features/api/QuizTaking/quizTakingApi";
import { useParams } from "react-router-dom";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";

const QuizQuestions = ({ data, answers, setAnswers }) => {
  const { quizSetId } = useParams();
  const { stats, questions } = data || {};
  const [submitQuiz, { isLoading }] = useSubmitQuizAttemptMutation();
  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);

  const maxIndex = stats?.total_questions - 1;
  const currentQuestion = questions[index];

  const handleSubmit = () => {
    const formData = { answers };
    submitQuiz({ quizSetId, formData })
      .unwrap()
      .then((data) => {
        if (data?.status === "success") {
          toast.success("Succesfully submitted");
        }
      })
      .catch((err) => toast.error(err?.data?.message));
    setShow(false);
  };

  const handleNextClick = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    } else {
      setShow(true);
    }
  };

  const handleBackClick = () => {
    if (index >= 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="lg:col-span-2 bg-white">
      {show && <Modal onHide={() => setShow(false)} onSubmit={handleSubmit} />}
      <div className="bg-white p-6 !pb-2 rounded-md">
        <QuizQuestionItem
          currentQuestion={currentQuestion}
          index={index}
          answers={answers}
          setAnswers={setAnswers}
          disabled={isLoading}
        />
        <div className="flex w-[49%] ml-auto gap-4">
          {index > 0 && (
            <button
              disabled={index === 0 || isLoading}
              onClick={handleBackClick}
              className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
            >
              Back
            </button>
          )}
          <button
            disabled={isLoading}
            onClick={handleNextClick}
            className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
          >
            {index === maxIndex ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
