import React from "react";
import Logo from "../../assets/logo-white.svg";
import ResultSummary from "./ResultSummary";
import ResultQuestions from "./ResultQuestions";

const ResultContainer = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        <img src={Logo} className="max-h-11 fixed left-6 top-6 z-50" />
        <ResultSummary />
        <ResultQuestions />
      </div>
    </div>
  );
};

export default ResultContainer;
