import React from "react";
import { Link } from "react-router-dom";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";
import './Sidebar.css'
import { RxDashboard } from 'react-icons/rx'
import { FiServer, FiSettings, FiUsers } from 'react-icons/fi'
import { HiOutlineTable } from 'react-icons/hi'
import logo from '../../assets/images/icon.png'

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="w-2/12 h-screen md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative z-10">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block text-left md:pb-2 mr-0 whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            <div className="flex justify-center items-center">
              <img src={logo} alt="logo" className="w-16 mr-4" /> <span className="text-lg">CNN</span>
            </div>
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          <div
            className={
              "md:flex px-6 md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none p-0">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center hover:opacity-60 " +
                    (window.location.pathname === '/admin/dashboard'
                      ? "text-blue-500 "
                      : "text-black")
                  }
                  to="/admin/dashboard"
                >
                  <RxDashboard fontSize={18} className={
                    "mr-2 text-sm " +
                    (window.location.pathname === '/admin/dashboard'
                      ? ""
                      : "opacity-75")
                  } />
                  Dashboard
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center hover:opacity-60 " +
                    (window.location.pathname === '/admin/settings'
                      ? "text-blue-500"
                      : "text-black")
                  }
                  to="/admin/settings"
                >
                  <FiSettings fontSize={18} className={
                    "mr-2 text-sm " +
                    (window.location.pathname === '/admin/settings'
                      ? ""
                      : "opacity-75")
                  } />
                  Settings
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center hover:opacity-60  " +
                    (window.location.pathname === '/admin/tables'
                      ? "text-blue-500 hover:text-pink-50"
                      : "text-black")
                  }
                  to="/admin/tables"
                >
                  <HiOutlineTable fontSize={18} className={
                    "mr-2 text-sm " +
                    (window.location.pathname === '/admin/tables'
                      ? ""
                      : "opacity-75")
                  } />
                  Tables
                </Link>
              </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline">
              User
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center hover:opacity-60 " +
                    (window.location.pathname === '/admin/projects'
                      ? "text-blue-500"
                      : "text-black")
                  }
                  to="/admin/projects"
                >
                  <FiServer fontSize={18} className={
                    "mr-2 text-sm " +
                    (window.location.pathname === '/admin/projects'
                      ? ""
                      : "opacity-75")
                  } />
                  Projects
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center hover:opacity-60 " +
                    (window.location.pathname === '/admin/users'
                      ? "text-blue-500"
                      : "text-black")
                  }
                  to="/admin/users"
                >
                  <FiUsers fontSize={18} className={
                    "mr-2 text-sm " +
                    (window.location.pathname === '/admin/users'
                      ? ""
                      : "opacity-75")
                  } />
                  Users
                </Link>
              </li>
            </ul>
            <hr className="my-4 md:min-w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
