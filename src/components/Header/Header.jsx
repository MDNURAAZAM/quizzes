import Logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state?.auth);

  const isLoggedIn = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle logout click
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  const handleDashboardClick = () => {
    navigate("/admin");
  };

  const isAdmin = user?.role === "admin";

  return (
    <header className="flex justify-between items-center mb-8">
      <Link to="/">
        <img src={Logo} className="h-7" />
      </Link>
      <div>
        {isAdmin && (
          <button
            onClick={handleDashboardClick}
            className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            style={{ fontFamily: "Jaro" }}
          >
            Dashboard
          </button>
        )}
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
