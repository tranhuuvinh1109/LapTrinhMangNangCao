import React, { useEffect, useState } from 'react';
import { TableManageProject } from '../../components';
import manageAPI from '../../api/manageAPI';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setIsLoadingAPI } from '../../redux/apiSlice/apiAction';

const ManageProject = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([]);

  const getUserByID = async (id) => {
    const userId = id.split('_')[1];
    try {
      const res = await manageAPI.getUserbyID(userId);
      return res.data.data.user;
    } catch (error) {
      console.error('Error fetching user by ID: ', error);
      return null;
    }
  };

  useEffect(() => {
    dispatch(setIsLoadingAPI(true));
    const databaseRef = ref(db, `data`);

    const fetchData = async () => {
      try {
        const snapshot = await new Promise((resolve, reject) => {
          onValue(
            databaseRef,
            (snapshot) => {
              resolve(snapshot);
            },
            reject,
          );
        });

        const newData = [];
        const promises = [];

        snapshot.forEach((childSnapshot) => {
          const userDataPromise = getUserByID(childSnapshot.key);
          promises.push(userDataPromise);

          Object.keys(childSnapshot.val()).forEach((item) => {
            newData.push({
              ...childSnapshot.val()[item],
              id: item,
              user: childSnapshot.key.split('_')[1],
            });
          });
        });

        const userData = await Promise.all(promises);

        newData.forEach((data) => {
          data.user = userData.find((item) => item.id === +data.user);
        });

        setValue(newData);
        dispatch(setIsLoadingAPI(false));
      } catch (error) {
        console.error('Error fetching and processing data: ', error);
        dispatch(setIsLoadingAPI(false));
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TableManageProject dataManageProject={value} />
    </div>
  );
};

export default ManageProject;
