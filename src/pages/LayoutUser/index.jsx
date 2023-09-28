import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import NavbarAdmin from "../../components/NavbarAdmin";
import HeaderStats from "../../components/HeaderStats";

const LayoutUser = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="relative w-10/12 bg-blueGray-100">
        <div className="">
          {" "}
          <NavbarAdmin />
          {/* <HeaderStats /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutUser;
