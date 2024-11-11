import React from "react";
import Question from "./Question";

const QuestionsContainer = () => {
  return (
    <div className="px-4 max-h-screen overflow-y-scroll">
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
};

export default QuestionsContainer;
