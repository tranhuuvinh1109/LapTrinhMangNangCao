/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { id: 1, icon: "fas fa-tv", text: "Dashboard", link: "/admin/dashboard" },
  { id: 2, icon: "fas fa-tools", text: "Settings", link: "/admin/settings" },
  { id: 3, icon: "fas fa-table", text: "Tables", link: "/admin/tables" },
  { id: 4, icon: "fas fa-map-marked", text: "Maps", link: "/admin/maps" },
];

const authPages = [
  { id: 1, icon: "fas fa-fingerprint", text: "Login", link: "/auth/login" },
  {
    id: 2,
    icon: "fas fa-clipboard-list",
    text: "Register",
    link: "/auth/register",
  },
];

const noLayoutPages = [
  { id: 1, icon: "fas fa-newspaper", text: "Landing Page", link: "/landing" },
  { id: 2, icon: "fas fa-user-circle", text: "Profile Page", link: "/profile" },
];

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Notus React
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
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
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {menuItems.map((item) => (
                <li key={item.id} className="items-center">
                  <Link
                    className={`text-xs uppercase py-3 font-bold block ${
                      window.location.href.indexOf(item.link) !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500"
                    }`}
                    to={item.link}
                  >
                    <i
                      className={`mr-2 text-sm ${
                        window.location.href.indexOf(item.link) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300"
                      } ${item.icon}`}
                    ></i>{" "}
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {authPages.map((item) => (
                <li key={item.id} className="items-center">
                  <Link
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                    to={item.link}
                  >
                    <i className={`mr-2 text-sm ${item.icon}`}></i> {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {noLayoutPages.map((item) => (
                <li key={item.id} className="items-center">
                  <Link
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                    to={item.link}
                  >
                    <i className={`mr-2 text-sm ${item.icon}`}></i> {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                  Styles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
