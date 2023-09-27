import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCloudDoneOutline } from "react-icons/io5";
import ProgressBar from "../../../components/ProgressBar";
import { BsFolderSymlink } from "react-icons/bs";

const TableTrained = ({ userData }) => {
  return (
    <div className="max-h-[600px] overflow-y-auto">
      <div className="bg-slate-100 text-slate-400 font-medium flex pt-6 pl-4 pb-2">
        <div className="w-1/6">STT</div>
        <div className="w-1/6">Project Name</div>
        <div className="w-1/12">Status</div>
        <div className="w-1/6">Progress</div>
        <div className="w-1/6">Date</div>
        <div className="w-1/6">Link Drive</div>
      </div>
      <div>
        {userData.trainingHistory.map((training, index) => (
          <div
            key={index}
            className="font-medium flex pl-4 py-4 items-center border-b"
          >
            <div className="w-1/6">{index + 1}</div>
            <div className="w-1/6">{userData.projectName}</div>
            <div className="w-1/12">
              {training.status === "done" ? (
                <div className="bg-green-300 flex justify-center items-center px-2 py-1 text-white rounded-full">
                  <IoCloudDoneOutline fontSize={14} />
                  <span className="ml-1 text-sm">Done</span>
                </div>
              ) : (
                <div className="bg-orange-300 flex justify-center items-center px-2 py-1 text-white rounded-full">
                  <AiOutlineLoading3Quarters
                    fontSize={14}
                    className="animate-spin"
                  />
                  <span className="ml-1 text-sm">Training</span>
                </div>
              )}
            </div>
            <div className="w-1/6 flex items-end justify-center">
              <ProgressBar progress={training.progress} />
            </div>
            <div className="w-1/6">{training.date}</div>
            <div className="w-1/6">
              <a
                href={userData.linkDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center"
              >
                <BsFolderSymlink fontSize={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableTrained;
