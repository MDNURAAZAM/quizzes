import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Switch from "react-switch";
import { useUpdateQuizMutation } from "../../features/api/quizManagement/quizManagementApi";
import { toast } from "react-toastify";

const PublishButton = ({ isPublished, description, title }) => {
  const { quizSetId } = useParams();
  const [updateQuiz, { isLoading }] = useUpdateQuizMutation();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (value) => {
    setIsChecked(value);
    const formData = {
      title,
      description,
      status: value ? "published" : "draft",
    };
    updateQuiz({ quizSetId, formData })
      .unwrap()
      .then((data) => {
        if (data?.status === "success") {
          toast.success("Quiz updated succesfully");
        }
      })
      .catch((err) => {
        setIsChecked(!value);
        toast.error(err?.data?.message || "error occured");
      });
  };

  //set local state based on api response
  useEffect(() => {
    setIsChecked(isPublished);
  }, [isPublished]);
  return (
    <div className="flex items-center justify-center gap-4 pb-3">
      <Switch
        disabled={isLoading}
        onColor="#28194b"
        height={20}
        width={45}
        onChange={handleChange}
        checked={isChecked}
      />
      <p className="text-2xl">publish</p>
    </div>
  );
};

export default PublishButton;
