import { useState } from "react";
import { useCreateQuizMutation } from "../../features/api/quizManagement/quizManagementApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SetQuizForm = () => {
  const [createQuiz, { isLoading }] = useCreateQuizMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
    };

    createQuiz({ formData })
      .unwrap()
      .then((data) => {
        if (data?.status === "success") {
          resetForm();
          toast.success("Quiz created succesfully");
          navigate(`/admin/set-quiz-entry/${data?.data?.id}`);
        }
      })
      .catch((err) => toast.error(err?.data?.message));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="quiz-title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Quiz title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
          placeholder="Quiz"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="quiz-description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description (Optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
          placeholder="Description"
        ></textarea>
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Next
      </button>
    </form>
  );
};

export default SetQuizForm;
