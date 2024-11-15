import { useDispatch } from "react-redux";
import Logo from "../../assets/logo-white.svg";
import useLoggedInUser from "../../hooks/useLoggedInUser";
import Avatar from "../Images/Avatar";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const loggedInUser = useLoggedInUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle logout click
  const handleLogoutClick = () => {
    dispatch(userLoggedOut());
    navigate("/");
  };
  return (
    <aside className=" bg-primary p-6 flex flex-col">
      <div className="mb-10">
        <img src={Logo} className="h-7" />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg bg-buzzr-purple bg-white text-primary font-bold"
            >
              Quizzes
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Settings
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Manage Users
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Manage Roles
            </a>
          </li>

          <li onClick={handleLogoutClick}>
            <a
              href=""
              className="block py-2 px-4 rounded-lg text-gray-100 hover:bg-gray-100 hover:text-primary"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto flex items-center">
        <img
          src={Avatar}
          alt="Mr Hasan"
          className="w-10 h-10 rounded-full border-2 border-white mr-3 object-cover"
        />
        <span className="text-white font-semibold">{loggedInUser}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
