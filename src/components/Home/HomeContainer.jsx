import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import CardsContainer from "../CardsContainer/CardsContainer";

const HomeContainer = () => {
  return (
    <div className="bg-[#F5F3FF] min-h-screen">
      <div className="container mx-auto py-3">
        <Header />
        <Profile />
        <CardsContainer />
        <Footer />
      </div>
    </div>
  );
};

export default HomeContainer;
