import CreateSVG from "../SVGs/CreateSVG";

const CreateQuizCard = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
        <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-all">
          <CreateSVG />
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-all">
          Create a new quiz
        </h3>
        <p className="text-gray-600 text-sm group-hover:scale-105 transition-all">
          Build from the ground up
        </p>
      </div>
    </>
  );
};

export default CreateQuizCard;
