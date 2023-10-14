import React, { useEffect, useMemo } from 'react';
import { ChooseFile, TableProjects } from '../../components';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { realtimeProjects } from '../../redux/projectSlice/projectAction';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const HomePage = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('user', user.user);
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
      console.log('project realtime->', newData);
      dispatch(realtimeProjects(newData));
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <p onClick={() => console.log(project)}>aaa</p>
      <ChooseFile />
      <div className="w-9/12 mx-auto">
        <TableProjects projects={project.project} />
      </div>
    </div>
  );
};
export default HomePage;
