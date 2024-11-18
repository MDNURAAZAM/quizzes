import QuestionsContainer from "./QuestionsContainer";
import SetQuestionContainer from "./SetQuestionContainer";
import NavSVG from "../SVGs/NavSVG";
import { useSelector } from "react-redux";
import { useGetQuizSetListQuery } from "../../features/api/quizManagement/quizManagementApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const SetQuizQuestions = () => {
  const { quizSetId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useGetQuizSetListQuery(
    undefined,
    {
      skip: user?.role !== "admin",
    }
  );

  const [editQuestionId, setEditQuestionId] = useState(null);
  const currentQuiz = data?.find((quiz) => quiz?.id === quizSetId);
  const editQuestion = editQuestionId
    ? currentQuiz?.Questions?.find(
        (question) => question?.id === editQuestionId
      )
    : null;

  const { Questions, description, title, status } = currentQuiz || {};

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }
  return (
    <main className="max-h-screen  md:flex-grow px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-h-screen">
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link
                to={"/admin"}
                className="text-gray-600 hover:text-buzzr-purple"
              >
                Home
              </Link>
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
          <SetQuestionContainer
            questionsCount={Questions?.length}
            title={title}
            description={description}
            editQuestion={editQuestion}
            setEditQuestionId={setEditQuestionId}
            isPublished={status === "published"}
          />
          <QuestionsContainer
            questions={Questions}
            onEdit={(id) => setEditQuestionId(id)}
          />
        </div>
      </div>
    </main>
  );
};

export default SetQuizQuestions;
