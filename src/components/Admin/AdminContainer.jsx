import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const AdminContainer = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex min-w-screen">
      <Sidebar />
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminContainer;
