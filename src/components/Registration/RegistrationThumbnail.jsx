import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.svg";
import SallyImage from "../../assets/Saly-1.png";

const RegistrationThumbnail = () => {
  return (
    <div className="hidden  lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12  h-full fixed left-0 top-0">
      <div className="text-white">
        <Link to={"/"}>
          <img src={Logo} className="h-8" />
        </Link>

        <img
          src={SallyImage}
          alt="Illustration"
          className="mx-auto 2xl:ml-0 max-h-64  max-w-lg"
        />

        <h2 className="text-3xl font-bold mb-1">Sign Up Now</h2>
        <p className="text-xl mb-4 font-medium">
          Boost Your Learning Capabilities
        </p>
        <p className="mb-8 max-w-lg">
          Logging in unlocks your personal progress tracker, letting you
          evaluate your performance and see how you stack up against others.
          Whether you are preparing for exams, improving your knowledge, or
          simply having fun, there is no better way to sharpen your mind.
        </p>
      </div>
    </div>
  );
};

export default RegistrationThumbnail;
