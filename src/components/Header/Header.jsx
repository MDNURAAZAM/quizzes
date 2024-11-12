import React from "react";
import Logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

const Header = () => {
  const isLoggedIn = useAuth();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };
  return (
    <header className="flex justify-between items-center mb-8">
      <img src={Logo} className="h-7" />
      <div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            style={{ fontFamily: "Jaro" }}
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            style={{ fontFamily: "Jaro" }}
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
