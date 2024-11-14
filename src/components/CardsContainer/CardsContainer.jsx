import CardItem from "./CardItem";
import { useGetQuizListQuery } from "../../features/api/QuizTaking/quizTakingApi";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const CardsContainer = () => {
  const isLoggedIn = useAuth();
  const { data, isLoading, isError, error, refetch } = useGetQuizListQuery();

  useEffect(() => {
    refetch();
  }, [isLoggedIn, refetch]);
  const { data: quizList } = data || {};
  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent message={error?.data?.message} />;
  }

  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

        {/* <!-- Cards --> */}
        {quizList?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizList?.map((quiz) => (
              <CardItem quiz={quiz} key={quiz?.id} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default CardsContainer;
