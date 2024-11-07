import React from "react";
import JS from "../../assets/cards/js.png";
import CardItem from "./CardItem";

const CardsContainer = () => {
  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

        {/* <!-- Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardItem isCompleted={true} />
          <CardItem />
          <CardItem isCompleted={true} />
          <CardItem />
        </div>
      </section>
    </main>
  );
};

export default CardsContainer;
