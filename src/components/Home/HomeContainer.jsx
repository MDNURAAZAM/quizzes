import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import CardsContainer from "../CardsContainer/CardsContainer";
import useAuth from "../../hooks/useAuth";
import { useGetQuizListQuery } from "../../features/api/QuizTaking/quizTakingApi";
import { useEffect } from "react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const HomeContainer = () => {
  const isLoggedIn = useAuth();
  const { data, isLoading, isError, error, refetch } =
    useGetQuizListQuery(undefined);

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
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Header />
        {isLoggedIn && <Profile />}
        <CardsContainer quizList={quizList} />
        <Footer />
      </div>
    </div>
  );
};

export default HomeContainer;
