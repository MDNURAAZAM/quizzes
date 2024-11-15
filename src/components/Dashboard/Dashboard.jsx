import { useSelector } from "react-redux";
import { useGetQuizSetListQuery } from "../../features/api/quizManagement/quizManagementApi";
import CreateQuizCard from "./CreateQuizCard";
import QuizCard from "./QuizCard";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useGetQuizSetListQuery(
    undefined,
    {
      skip: user?.role !== "admin",
    }
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }
  return (
    <main className="flex-grow p-10">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">Hey There 👋!</h2>
        <h1 className="text-4xl font-bold">Welcome Back To Your Quiz Hub!</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to={"/admin/set-quiz"}>
          <CreateQuizCard />
        </Link>

        {data?.length > 0 &&
          data?.map((quiz) => (
            <Link to={`/admin/set-quiz-entry/${quiz?.id}`} key={quiz?.id}>
              <QuizCard quiz={quiz} />
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Dashboard;
