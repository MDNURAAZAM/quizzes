import React from "react";
import LoginLeftSide from "./LoginLeftSide";
import LoginRIghtSide from "./LoginRIghtSide";

const Login = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <div class="flex min-h-screen">
        <LoginLeftSide />
        <LoginRIghtSide />
      </div>
    </div>
  );
};

export default Login;
