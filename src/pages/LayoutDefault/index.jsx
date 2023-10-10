import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

const LayoutDefault = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutDefault;
