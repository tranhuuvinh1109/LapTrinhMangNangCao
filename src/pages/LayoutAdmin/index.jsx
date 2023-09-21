import React from "react";
import "./LayoutAdmin.css";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import NavbarAdmin from "../../components/NavbarAdmin";
import HeaderStats from "../../components/HeaderStats";

const LayoutAdmin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="relative w-10/12 bg-blueGray-100">
        <NavbarAdmin />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
