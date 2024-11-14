import { Link } from "react-router-dom";
import Logo from "../../assets/logo-white.svg";
import LoginImage from "../../assets/Saly-1.png";

const LoginThumbnail = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative">
      <div className="text-white">
        <Link to={"/"}>
          <img src={Logo} className="h-8" />
        </Link>
        <img src={LoginImage} alt="Illustration" className="mx-auto" />

        <h2 className="text-3xl font-bold mb-4">Sign in Now</h2>
        <p className="text-xl mb-4">Boost Your Learning Capabilities</p>
        <p className="mb-8">
          Logging in unlocks your personal progress tracker, letting you
          evaluate your performance and see how you stack up against others.
          Whether you are preparing for exams, improving your knowledge, or
          simply having fun, there is no better way to sharpen your mind.
        </p>
      </div>
    </div>
  );
};

export default LoginThumbnail;
