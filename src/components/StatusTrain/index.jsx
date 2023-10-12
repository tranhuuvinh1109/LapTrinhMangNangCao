import React from 'react';
import { AiOutlineLoading3Quarters, AiOutlineCloudUpload } from 'react-icons/ai';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { HiOutlineQueueList } from 'react-icons/hi2';
import './StatusTrain.css';

const StatusTrain = ({ status }) => {
  let statusComponent;

  switch (status) {
    case 'upload':
      statusComponent = (
        <div className="bg-blue-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
          <span className="text-sm">Upload</span>
        </div>
      );
      break;
    case 'training':
      statusComponent = (
        <div className="bg-orange-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
          <AiOutlineLoading3Quarters fontSize={14} className="animate-spin" />
          <span className="ml-1 text-sm">Training ...</span>
        </div>
      );
      break;
    case 'done':
      statusComponent = (
        <div className="bg-green-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
          <IoCloudDoneOutline fontSize={14} />
          <span className="ml-1 text-sm">Done</span>
        </div>
      );
      break;
    case 'push to drive':
      statusComponent = (
        <div className="bg-cyan-400 flex justify-center items-center w-100 py-1 text-white rounded-full">
          <AiOutlineCloudUpload fontSize={14} className="cloud-icon" />
          <span className="ml-1 text-sm">Push</span>
        </div>
      );
      break;
    default:
      statusComponent = (
        <div className="bg-gray-300 flex justify-center items-center w-100 py-1 text-white rounded-full">
          <HiOutlineQueueList fontSize={14} />
          <span className="text-sm">Waiting</span>
        </div>
      );
  }

  return statusComponent;
};

export default StatusTrain;
