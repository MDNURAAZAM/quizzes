import React from "react";
import LoginThumbnail from "./LoginThumbnail";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <div className="flex min-h-screen">
        <LoginThumbnail />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
