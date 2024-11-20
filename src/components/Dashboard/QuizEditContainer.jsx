import EditSVG from "../SVGs/EditSVG";

const QuizEditContainer = () => {
  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("edit");
  };
  return (
    <button onClick={handleEdit}>
      <EditSVG />
    </button>
  );
};

export default QuizEditContainer;
