import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import QuizSummary from "./QuizSummary";
import QuizQuestions from "./QuizQuestions";
import { useParams } from "react-router-dom";
import { useGetQuizDetailsQuery } from "../../features/api/QuizTaking/quizTakingApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { useState } from "react";

const QuizContainer = () => {
  const { quizSetId } = useParams();
  const { data, isLoading, isError, error } = useGetQuizDetailsQuery(
    { quizSetId },
    { skip: quizSetId?.length === 0 }
  );
  const [answers, setAnswers] = useState({});

  const answersParticipated = Object?.values(answers)?.filter(
    (value) => value?.length > 0
  )?.length;

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }
  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Header />

        <main className="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
            {/* <!-- Left Column --> */}
            <QuizSummary data={data?.data} participated={answersParticipated} />

            {/* <!-- Right Column --> */}
            <QuizQuestions
              data={data?.data}
              answers={answers}
              setAnswers={setAnswers}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default QuizContainer;
