import { Link } from "react-router-dom";

const ErrorComponent = ({
  message = "Something went wrong. Please try again later.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-23vh)] bg-white">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">{message}</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#8c69f2] text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorComponent;
