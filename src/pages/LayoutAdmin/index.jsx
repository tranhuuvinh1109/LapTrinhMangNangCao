import React, { useEffect } from 'react';
import './LayoutAdmin.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components';
import NavbarAdmin from '../../components/NavbarAdmin';
import { useSelector } from 'react-redux';
import LoadingPage from '../LoadingPage';
import toast from 'react-hot-toast';

const LayoutAdmin = () => {
  const isLoading = useSelector((state) => state.api);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.user?.email !== 'Vinh.Developer@gmail.com') {
      toast.error('Only administrators can access the management page');
      navigate('/');
    }
  }, [user.user]);
  return (
    <div className="flex flex-row overflow-hidden">
      {isLoading.loading && <LoadingPage />}
      <Sidebar />
      <div className="relative w-10/12">
        <NavbarAdmin />
        <div className="h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
