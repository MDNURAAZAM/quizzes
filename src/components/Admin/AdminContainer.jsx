import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const AdminContainer = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default AdminContainer;
