import React from "react";
import "./LayoutAdmin.css";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import NavbarAdmin from "../../components/NavbarAdmin";

const LayoutAdmin = () => {
  return (
    <div className="flex flex-row overflow-hidden">
      <Sidebar />
      <div className="relative w-10/12">
        <NavbarAdmin />
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
