import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
      });
      setDropdownPopoverShow(true);
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useEffect(() => {
    if (dropdownPopoverShow) {
      openDropdownPopover();
    }
  }, [dropdownPopoverShow]);

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  // Lắng nghe sự kiện click toàn cục để đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverDropdownRef.current &&
        !popoverDropdownRef.current.contains(event.target) &&
        btnDropdownRef.current &&
        !btnDropdownRef.current.contains(event.target)
      ) {
        setDropdownPopoverShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="https://www.nzherald.co.nz/resizer/qpDIxoq6Wa_9A0yNMUszcfAhWxs=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/CS4OIDWIJBG3LO6JHVUNQICGOQ.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={`${
          dropdownPopoverShow ? "block" : "hidden"
        } bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`}
      >
        <Link
          to="/user/profile" // Link to the desired profile route
          className="text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-blueGray-700 flex justify-center"
          onClick={(e) => {
            toggleProfile(); // Toggle the profile visibility
            closeDropdownPopover(); // Close the dropdown popover
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="ml-1 text-sm">Profile</span>
        </Link>
        <Link
          to="/user/change-password" // Link to the desired profile route
          className="text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-blueGray-700 flex justify-center"
          onClick={(e) => {
            toggleProfile(); // Toggle the profile visibility
            closeDropdownPopover(); // Close the dropdown popover
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span className="ml-1 text-sm">Security</span>
        </Link>
        <Link
          to="/user/profile" // Link to the desired profile route
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => {
            toggleProfile(); // Toggle the profile visibility
            closeDropdownPopover(); // Close the dropdown popover
          }}
        >
          Profile
        </Link>
        {/* Add more dropdown items here */}
      </div>
    </>
  );
};

export default UserDropdown;
