import React, { useMemo } from 'react';
import { BsFolderSymlink } from 'react-icons/bs';
import { PiMaskSadLight } from 'react-icons/pi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoCloudDoneOutline } from 'react-icons/io5';
import ProgressBar from '../ProgressBar';
import UserCard from '../UserCard';
import { Link } from 'react-router-dom';

const CardTable = ({ dataCardTable }) => {
  const createAt = useMemo(() => {
    const convert = new Date(dataCardTable.createAt);
    return (
      <span>
        {`${convert.getHours().toString().padStart(2, '0')}:${convert.getMinutes().toString().padStart(2, '0')} - 
					${convert.getDay().toString().padStart(2, '0')}/${(convert.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${convert.getFullYear()}`}
      </span>
    );
  }, [dataCardTable.createAt]);
  return (
    <Link to={`/project/${dataCardTable.id}`} className="no-underline text-black">
      <div className="font-medium flex pl-4 py-4 items-center border-b hover:bg-white">
        <div className="w-8 flex justify-center">{dataCardTable.id}</div>
        <div className="w-3/12 flex justify-center">{dataCardTable.name}</div>
        <div className="w-1/12 flex justify-center">
          {dataCardTable.status === 'done' ? (
            <div className="bg-green-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
              <IoCloudDoneOutline fontSize={14} />
              <span className="ml-1 text-sm">Done</span>
            </div>
          ) : (
            <div className="bg-orange-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
              <AiOutlineLoading3Quarters fontSize={14} className="animate-spin" />
              <span className="ml-1 text-sm">Training</span>
            </div>
          )}
        </div>
        <div className="w-3/12 flex justify-center">
          <UserCard dataUserCard={dataCardTable.user} />
        </div>
        <div className="w-2/12 flex items-end justify-center">
          <ProgressBar progress={dataCardTable.progress} />
        </div>
        <div className="w-1/12 flex justify-center">
          {dataCardTable.linkDrive ? (
            <a
              href={dataCardTable.linkDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center"
            >
              <BsFolderSymlink fontSize={20} />
            </a>
          ) : (
            <PiMaskSadLight fontSize={20} title="Dont't have link" />
          )}
        </div>
        <div className="w-1/12 flex justify-center">{createAt}</div>
      </div>
    </Link>
  );
};

const TableManageProject = ({ dataManageProject }) => {
  const renderCard = useMemo(() => {
    if (dataManageProject.length > 0) {
      return dataManageProject.map((cardTable) => {
        return <CardTable dataCardTable={cardTable} key={cardTable.id} />;
      });
    } else {
      return (
        <div className="flex items-center justify-center min-h-[100px]">
          <PiMaskSadLight fontSize={40} />
        </div>
      );
    }
  }, [dataManageProject]);

  return (
    <div className="max-h-[775px] overflow-y-auto">
      <div className="bg-slate-200 text-slate-500 font-medium flex pt-6 pl-4 pb-2">
        <div className="w-8 flex justify-center">ID</div>
        <div className="w-3/12 flex justify-center">Project Name</div>
        <div className="w-1/12 flex justify-center">Status</div>
        <div className="w-3/12 flex justify-center">User</div>
        <div className="w-2/12 flex justify-center">Progress</div>
        <div className="w-1/12 flex justify-center">Link Model</div>
        <div className="w-1/12 flex justify-center">Create At</div>
      </div>
      <div className="bg-slate-100">{renderCard}</div>
    </div>
  );
};

export default TableManageProject;
