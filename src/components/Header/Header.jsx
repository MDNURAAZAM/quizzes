import React from "react";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <img src={Logo} className="h-7" />
      <div>
        <button
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          style={{ fontFamily: "Jaro" }}
        >
          Login
        </button>

        <button
          className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
          style={{ fontFamily: "Jaro" }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
