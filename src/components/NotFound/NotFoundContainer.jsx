import React from "react";
import { Link } from "react-router-dom";

const NotFoundContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5F3FF]">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundContainer;
