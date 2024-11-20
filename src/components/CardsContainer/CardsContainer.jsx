import useAuth from "../../hooks/useAuth";
import CardItem from "./CardItem";

const CardsContainer = ({ quizList }) => {
  const isLoggedIn = useAuth();
  return quizList?.length > 0 ? (
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
  ) : (
    <div
      className={`bg-[#F5F3FF] flex items-center justify-center h-[${isLoggedIn ? "35vh" : "78vh"}]`}
    >
      <p className="text-2xl">
        Sorry, there are no{" "}
        <span className="text-secondary font-extrabold px-1">Quizzes</span>{" "}
        available.
      </p>
    </div>
  );
};

export default CardsContainer;
