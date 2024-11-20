const EditQuizForm = ({ formData, setFormData }) => {
  const { title, description } = formData;
  const handleChange = ({ value, name }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="quiz-title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Quiz title
        </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => handleChange(e.target)}
          name="title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
          placeholder="Quiz"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="quiz-description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          required
          value={description}
          name="description"
          onChange={(e) => handleChange(e.target)}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-buzzr-purple focus:border-buzzr-purple"
          placeholder="Description"
        ></textarea>
      </div>
    </>
  );
};

export default EditQuizForm;
