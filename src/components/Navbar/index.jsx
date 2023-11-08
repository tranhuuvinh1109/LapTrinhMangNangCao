import React, { useMemo, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/icon.png';
import AvatarPopover from '../AvatarPopover';
import { useSelector } from 'react-redux';
import SearchBox from '../SearchBox';

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const renderUser = useMemo(() => {
    if (user) {
      return (
        <div>
          <AvatarPopover user={user.user} />
        </div>
      );
    }
    return <Link to="auth">Login</Link>;
  }, [user]);

  return (
    <nav id="navbar">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="w-10" alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>
              <NavLink
                to="/"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/dashboard"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user/manual_code"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                MANUAL CODE
              </NavLink>
            </li>
            {user?.user?.email === 'Vinh.Developer@gmail.com' && (
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
                >
                  DASHBOARD ADMIN
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                CONTACT
              </NavLink>
            </li>
            <li>{renderUser}</li>
          </ul>
        </div>
        <SearchBox />
      </div>
    </nav>
  );
};

export default Navbar;
