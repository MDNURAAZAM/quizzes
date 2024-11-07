import React from "react";
import QuizQuestionItem from "./QuizQuestionItem";

const QuizQuestions = () => {
  return (
    <div className="lg:col-span-2 bg-white">
      <div className="bg-white p-6 !pb-2 rounded-md">
        <QuizQuestionItem />
        <a
          href="./result.html"
          className="w-1/2 text-center ml-auto block bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mb-6 font-semibold my-8"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default QuizQuestions;
