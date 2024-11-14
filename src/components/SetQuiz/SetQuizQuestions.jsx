import Sidebar from "../Sidebar/Sidebar";
import QuestionsContainer from "./QuestionsContainer";
import SetQuestionForm from "./SetQuestionForm";
import NavSVG from "../SVGs/NavSVG";

const SetQuizQuestions = () => {
  return (
    <main className="max-h-screen overflow-auto md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-h-screen">
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-gray-600 hover:text-buzzr-purple">
                Home
              </a>
              <NavSVG />
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-buzzr-purple"
                aria-current="page"
              >
                Quizzes
              </a>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1  lg:grid-cols-2 md:gap-8 lg:gap-12">
          <SetQuestionForm />
          <QuestionsContainer />
        </div>
      </div>
    </main>
  );
};

export default SetQuizQuestions;
