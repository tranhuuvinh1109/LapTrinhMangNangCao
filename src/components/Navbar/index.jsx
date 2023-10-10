import React, { useMemo } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png';
import AvatarPopover from '../AvatarPopover';
import { useSelector } from 'react-redux';

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
    <nav>
      <div className="navbar">
        <i className="bx bx-menu"></i>
        <div className="logo">
          <Link to="/">
            <img src={logo} className="w-10" alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <div className="sidebar-logo">
            <span className="logo-name">CodingLab</span>
            <i className="bx bx-x"></i>
          </div>
          <ul className="links">
            <li>
              <Link to="/" className="active">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/user/dashboard">Dashboard User</Link>
            </li>
            <li>
              <Link to="/user/manual_code">Manual Code</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Dashboard Admin</Link>
            </li>
            <li>
              <span>ABOUT US</span>
            </li>
            <li>{renderUser}</li>
          </ul>
        </div>
        <div className="search-box">
          <i className="bx bx-search"></i>
          <div className="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
