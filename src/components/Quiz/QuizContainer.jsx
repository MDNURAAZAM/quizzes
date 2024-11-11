import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import QuizSummary from "./QuizSummary";
import QuizQuestions from "./QuizQuestions";

const QuizContainer = () => {
  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Header />

        <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
            {/* <!-- Left Column --> */}
            <QuizSummary />

            {/* <!-- Right Column --> */}
            <QuizQuestions />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default QuizContainer;