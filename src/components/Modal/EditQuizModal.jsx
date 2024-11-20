import { useEffect, useState } from "react";
import "./modal.css";
import EditQuizForm from "../SetQuiz/EditQuizForm";

const EditQuizModal = ({ quiz, onHide, onSubmit, disabled = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  //set initial values
  useEffect(() => {
    if (quiz) {
      const { title, description } = quiz || {};
      setFormData({
        title,
        description,
      });
    }
  }, [quiz]);

  const handleEdit = (e) => {
    e.stopPropagation();
    onSubmit(formData);
  };
  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-lg bg-gray-300 shadow-xl">
            <div className="p-6">
              {/* edit form starts */}
              <EditQuizForm formData={formData} setFormData={setFormData} />
              {/* edit form ends */}

              <div className="flex justify-end space-x-3">
                <button
                  className="bg-secondary rounded-md border border-[secondary] px-4 py-2 text-sm font-medium text-white hover:bg-[secondary] focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    onHide();
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={disabled}
                  className={`bg-primary text-white rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm `}
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuizModal;
