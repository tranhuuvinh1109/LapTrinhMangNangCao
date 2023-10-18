import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { BsFolderSymlink } from 'react-icons/bs';
import { LuFileX2 } from 'react-icons/lu';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ProgressBarAnimation, StatusTrain } from '../../components';

const ProjectDetail = () => {
  const [statusValue, setStatusValue] = useState([
    {
      title: 'Waiting',
      status: 'wait',
    },
    {
      title: 'Extracting',
      status: 'wait',
    },
    {
      title: 'Training',
      status: 'wait',
    },
    {
      title: 'Push to Drive',
      status: 'wait',
    },
    {
      title: 'Done',
      status: 'wait',
    },
  ]);
  const [projectDetail, setProjectDetail] = useState(null);
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const renderProject = useMemo(() => {
    if (projectDetail) {
      const linkIcon = projectDetail.linkDrive ? (
        <a
          href={projectDetail.linkDrive}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center"
        >
          <BsFolderSymlink fontSize={20} />
        </a>
      ) : projectDetail.status === 'push to drive' ? (
        <AiOutlineLoading3Quarters fontSize={20} className="animate-spin" />
      ) : (
        <LuFileX2 fontSize={20} />
      );

      return (
        <div className="font-medium flex pl-4 py-4 items-center border-b hover:cursor-pointer hover:bg-neutral-100">
          <div className="w-1/12 flex justify-center">{projectDetail.id}</div>
          <div className="w-2/12 flex justify-center">{projectDetail.name}</div>
          <div className="w-2/12 px-2 flex justify-center">
            <StatusTrain status={projectDetail.status} />
          </div>
          <div className="w-3/12 px-2 flex justify-center">
            <ProgressBarAnimation progress={projectDetail.progress} />
          </div>
          <div className="w-2/12 flex justify-center">{linkIcon}</div>
          <div className="w-2/12 flex justify-center">{projectDetail.createAt}</div>
        </div>
      );
    }
  }, [projectDetail]);
  useEffect(() => {
    const token = localStorage.getItem('CNN_TOKEN');
    const databaseRef = ref(db, `data/user_${user?.user?.id}/${id}`);
    if (!token) {
      navigate('/auth');
    }

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      let newData = {};
      snapshot.forEach((childSnapshot) => {
        newData = { ...newData, [childSnapshot.key]: childSnapshot.val() };
      });

      const indexFind = statusValue.findIndex((item) => item.title?.toLowerCase() === newData?.status);
      if (indexFind !== -1) {
        const statusValueTemp = statusValue.map((item, index) => {
          if (index < indexFind) {
            return { ...item, status: 'finish', icon: '' };
          } else if (index === indexFind) {
            return { ...item, status: 'progress', icon: <LoadingOutlined /> };
          }
          return { ...item, status: 'wait', icon: '' };
        });
        newData = { ...newData, id: id };
        setProjectDetail(newData);
        setStatusValue(statusValueTemp);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user?.user, id]);
  return (
    <div className="mt-32">
      <Steps items={statusValue} />
      <div className="shadow-2xl mt-8">
        <div className="bg-slate-200 text-slate-500 font-medium flex pt-6 pl-4 pb-2">
          <div className="w-1/12 flex justify-center">Id</div>
          <div className="w-2/12 flex justify-center">Id</div>
          <div className="w-2/12 px-2 flex justify-center">Status</div>
          <div className="w-3/12 px-2 flex justify-center">Progress</div>
          <div className="w-2/12 flex justify-center">Link Drive</div>
          <div className="w-2/12 flex justify-center">Create At</div>
        </div>
        <div>{renderProject}</div>
      </div>
    </div>
  );
};

export default ProjectDetail;
