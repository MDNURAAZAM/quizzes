import { useState } from "react";
import { useUpdateQuizMutation } from "../../features/api/quizManagement/quizManagementApi";
import { toast } from "react-toastify";
import EditSVG from "../SVGs/EditSVG";
import EditQuizModal from "../Modal/EditQuizModal";

const QuizEditContainer = ({ quiz }) => {
  const [updateQuiz, { isLoading }] = useUpdateQuizMutation();
  const [show, setShow] = useState(false);
  const handleEdit = ({ title, description }) => {
    const formData = { title, description, status: quiz?.status };
    const isValid = title?.length > 0 && description?.length > 0;

    if (isValid) {
      updateQuiz({ quizSetId: quiz?.id, formData })
        .unwrap()
        .then((data) => {
          if (data?.status === "success") {
            toast.success("Quiz updated succesfully");
          }
        })
        .catch((err) => {
          toast.error(err?.data?.message || "error occured");
        });
      setShow(false);
    } else {
      toast.error("Please enter all fileds");
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShow(true);
      }}
    >
      {show && (
        <EditQuizModal
          quiz={quiz}
          onHide={() => setShow(false)}
          onSubmit={handleEdit}
          disabled={isLoading}
        />
      )}
      <EditSVG />
    </div>
  );
};

export default QuizEditContainer;
