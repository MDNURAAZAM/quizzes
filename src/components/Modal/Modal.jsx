import "./modal.css";

const Modal = ({ onHide, onSubmit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-lg bg-gray-300 shadow-xl">
            <div className="p-6">
              <h3 className="mb-6 text-2xl font-semibold ">
                Are you sure you want to submit?
              </h3>
              <div className="flex justify-end space-x-3">
                <button
                  className="bg-secondary rounded-md border border-[secondary] px-4 py-2 text-sm font-medium text-white hover:bg-[secondary] focus:outline-none"
                  onClick={() => onHide()}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm "
                  onClick={() => onSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
