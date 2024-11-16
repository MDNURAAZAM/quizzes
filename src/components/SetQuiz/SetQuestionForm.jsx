import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAddQuestionMutation } from "../../features/api/quizManagement/quizManagementApi";

const SetQuestionForm = () => {
  const { quizSetId } = useParams();
  const [addQuestion, { isLoading }] = useAddQuestionMutation();
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleOptionsChange = ({ name, value }) => {
    setOptions((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionsSelect = (value) => {
    setCorrectAnswer((prev) => (prev === value ? "" : value));
  };
  const resetForm = () => {
    setTitle("");
    setOptions({
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
    setCorrectAnswer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correctAnswer) {
      const formData = {
        question: title,
        options: Object.values(options),
        correctAnswer: options[correctAnswer],
      };
      addQuestion({ quizSetId, formData })
        .unwrap()
        .then((data) => {
          if (data?.status === "success") {
            resetForm();
            toast.success("Question added succesfully");
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Please select a correct answer");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="quizTitle"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Question Title
          </label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="quizTitle"
            name="quizTitle"
            className="w-full mt-2 p-2 border border-input rounded-md bg-background text-foreground"
            placeholder="Enter quiz title"
          />
        </div>

        <p className="text-sm text-gray-600 mt-4">Add Options</p>

        <div id="optionsContainer" className="space-y-2 mt-4">
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              checked={correctAnswer === "option1"}
              onChange={() => handleOptionsSelect("option1")}
              type="checkbox"
              id="option0"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option0" className="sr-only">
              Option 1
            </label>
            <input
              required
              value={options["option1"]}
              onChange={(e) => handleOptionsChange(e.target)}
              type="text"
              name="option1"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 1"
            />
          </div>

          {/* <!-- Option 2 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              checked={correctAnswer === "option2"}
              onChange={() => handleOptionsSelect("option2")}
              type="checkbox"
              id="option2"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option0" className="sr-only">
              Option 2
            </label>
            <input
              required
              value={options["option2"]}
              onChange={(e) => handleOptionsChange(e.target)}
              name="option2"
              type="text"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 2"
            />
          </div>

          {/* <!-- Option 2 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              checked={correctAnswer === "option3"}
              onChange={() => handleOptionsSelect("option3")}
              type="checkbox"
              id="option3"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option3" className="sr-only">
              Option 3
            </label>
            <input
              required
              type="text"
              value={options["option3"]}
              onChange={(e) => handleOptionsChange(e.target)}
              name="option3"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 3"
            />
          </div>

          {/* <!-- Option 4 --> */}
          <div className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white">
            <input
              checked={correctAnswer === "option4"}
              onChange={() => handleOptionsSelect("option4")}
              type="checkbox"
              id="option4"
              name="correctAnswer"
              value="0"
              className="text-primary focus:ring-0 w-4 h-4"
            />
            <label htmlFor="option4" className="sr-only">
              Option 4
            </label>
            <input
              required
              type="text"
              value={options["option4"]}
              onChange={(e) => handleOptionsChange(e.target)}
              name="option4"
              className="w-full p-2 bg-transparent rounded-md text-foreground outline-none focus:ring-0"
              placeholder="Option 4"
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full my-3 bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Save Quiz
        </button>
      </form>
    </div>
  );
};

export default SetQuestionForm;
