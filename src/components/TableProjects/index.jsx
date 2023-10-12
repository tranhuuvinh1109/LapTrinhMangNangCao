import React, { useMemo } from 'react';
import StatusTrain from '../StatusTrain';
import ProgressBarAnimation from '../ProgressBarAnimation';
import { BsFolderSymlink } from 'react-icons/bs';
import { LuFileX2 } from 'react-icons/lu';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RxShadowNone } from 'react-icons/rx';

const TableProjects = ({ projects }) => {
  const renderProjects = useMemo(() => {
    if (projects) {
      return projects?.map((project) => {
        const linkIcon = project.linkDrive ? (
          <a href={project.linkDrive} target="_blank" rel="noopener noreferrer" className="inline-block text-center">
            <BsFolderSymlink fontSize={20} />
          </a>
        ) : project.status === 'push to drive' ? (
          <AiOutlineLoading3Quarters fontSize={20} className="animate-spin" />
        ) : (
          <LuFileX2 fontSize={20} />
        );

        return (
          <div className="font-medium flex pl-4 py-4 items-center border-b" key={project.id}>
            <div className="w-1/12 flex justify-center">{project.id}</div>
            <div className="w-2/12 px-2 flex justify-center">
              <StatusTrain status={project.status} />
            </div>
            <div className="w-4/12 px-2 flex justify-center">
              <ProgressBarAnimation progress={project.progress} />
            </div>
            <div className="w-2/12 flex justify-center">{linkIcon}</div>
            <div className="w-3/12 flex justify-center">{project.createAt}</div>
          </div>
        );
      });
    } else {
      return (
        <div className="h-40 flex justify-center items-center">
          <div className="justify-center items-center">
            <RxShadowNone fontSize={40} className="text-slate-500" />
          </div>
        </div>
      );
    }
  }, [projects]);
  return (
    <div className="shadow-2xl">
      <div className="bg-slate-200 text-slate-500 font-medium flex pt-6 pl-4 pb-2">
        <div className="w-1/12 flex justify-center">Id</div>
        <div className="w-2/12 px-2 flex justify-center">Status</div>
        <div className="w-4/12 px-2 flex justify-center">Progress</div>
        <div className="w-2/12 flex justify-center">Link Drive</div>
        <div className="w-3/12 flex justify-center">Create At</div>
      </div>
      <div>{renderProjects}</div>
    </div>
  );
};

export default TableProjects;
