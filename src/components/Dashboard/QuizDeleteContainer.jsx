import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteSVG from "../SVGs/DeleteSVG";
import { useDeleteQuizMutation } from "../../features/api/quizManagement/quizManagementApi";
import { toast } from "react-toastify";

const QuizDeleteContainer = ({ quizSetId }) => {
  const [deleteQuiz, { isLoading }] = useDeleteQuizMutation();
  const [show, setShow] = useState(false);
  const handleDelete = () => {
    deleteQuiz({ quizSetId })
      .unwrap()
      .then((data) => {
        if (data?.status === "success") {
          toast.success("Quiz deleted succesfully");
        }
      })
      .catch((err) => toast.error(err?.data?.message || "error occured"));
    setShow(false);
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShow(true);
      }}
    >
      {show && (
        <Modal
          disabled={isLoading}
          isDelete={true}
          onHide={() => setShow(false)}
          onSubmit={handleDelete}
        />
      )}
      <DeleteSVG />
    </div>
  );
};

export default QuizDeleteContainer;
