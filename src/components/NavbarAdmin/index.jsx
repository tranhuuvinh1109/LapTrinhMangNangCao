import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown";
import CardStats from "../Cards/CardStats";

export default function NavbarAdmin() {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-lg uppercase hidden lg:inline-block font-bold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-4 py-2.5 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded-lg text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex m-0">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      <div className="relative bg-cyan-400 md:pt-32 pb-12 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
        </div>
      </div>
    </>
  );
}
