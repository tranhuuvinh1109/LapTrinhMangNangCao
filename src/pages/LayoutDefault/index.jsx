import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getInformationByToken } from '../../redux/userSlice/userAction';
import LoadingPage from '../LoadingPage';
import { useNavigate } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { realtimeProjects } from '../../redux/projectSlice/projectAction';
import wallpaper from '../../assets/images/1426870.png';


const LayoutDefault = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.api);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('CNN_TOKEN');
    const databaseRef = ref(db, `data/user_${user?.user?.id}`);
    if (!token) {
      navigate('/auth');
    }

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      const newData = [];
      snapshot.forEach((childSnapshot) => {
        newData.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(realtimeProjects(newData));
    });

    return () => {
      unsubscribe();
    };
  }, [user?.user]);

  useEffect(() => {
    console.log({ isLoading });
    const token = localStorage.getItem('CNN_TOKEN');
    if (token && !user.user) {
      dispatch(getInformationByToken(token));
    }
  }, []);
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="w-[100%] h-[400px]">
          <img src={wallpaper} alt="wallpaper" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="mt-20 w-9/12 mx-auto">
          <Outlet />
        </div>
      </div>
      {(isLoading.loading || user.loading) && <LoadingPage />}
    </>
  );
};

export default LayoutDefault;
