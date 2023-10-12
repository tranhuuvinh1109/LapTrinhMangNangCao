import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getInformationByToken } from '../../redux/userSlice/userAction';

const LayoutDefault = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem('CNN_TOKEN');
    if (token && !user.user) {
      dispatch(getInformationByToken(token));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutDefault;
