import React from "react";
import "./LayoutAdmin.css";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import  from "../../components/NavbarAdmin";
import HeaderStats frmm "../../"
const LayoutAdmin = () => {
  return (
    <div>
      <Sidebar />
      {/* <Link to='/'>Return home</Link> */}
      <div>
        <NavbarAdmin />
<HeaderStats/>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
