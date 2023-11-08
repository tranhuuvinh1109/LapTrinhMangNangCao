import React, { useEffect } from 'react';
import { Table } from '../../components';
import manageAPI from '../../api/manageAPI';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';

const ManageProject = () => {

  const getAllProjects = async () => {
    console.log(22)
    const res = await manageAPI.getAllProject();
    console.log("test", { res })
  }

  const getUserByID = async (id) => {
    console.log('-->', id)
    const userId = id.split('_')[1];
    const res = await manageAPI.getUserbyID(userId)
    console.log({ res })
  }

  useEffect(() => {
    const databaseRef = ref(db, `data`);

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      const newData = [];
      snapshot.forEach((childSnapshot) => {
        getUserByID(childSnapshot.key)
        // Object.keys(childSnapshot.val()).forEach((item) => {
        //   newData.push({
        //     ...childSnapshot.val()[item],
        //     user: {
        //       name: "vinh",
        //       old: 13
        //     }
        //   }
        //   )
        // })
        // childSnapshot.val().forEach((item) => {
        //   console.log(item)
        // })
        // newData.push({
        //   id: childSnapshot.key,
        //   ...childSnapshot.val(),
        // });
        // console.log(childSnapshot.key, childSnapshot.val())

      });

      console.log(newData)
    });

    return () => {
      unsubscribe();
    };
  }, []);




  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};

export default ManageProject;
