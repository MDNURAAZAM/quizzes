import RegistrationThumbnail from "./RegistrationThumbnail";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="flex min-h-screen max-h-screen">
        <RegistrationThumbnail />
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
