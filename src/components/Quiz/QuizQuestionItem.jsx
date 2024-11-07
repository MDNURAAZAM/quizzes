import React from "react";
import QuizOption from "./QuizOption";

const QuizQuestionItem = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold">
          3. What is the height of an empty binary tree?
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <QuizOption />
        <QuizOption />
        <QuizOption />
        <QuizOption />
      </div>
    </>
  );
};

export default QuizQuestionItem;
