import React from 'react';
import './DashboardUser.css';
import { TableProjects } from '../../components';
import { useSelector } from 'react-redux';

const DashboardUser = () => {
  const project = useSelector((state) => state.project);
  return (
    <div>
      <TableProjects projects={project.project} className="max-h-600-px overflow-y-auto" />
    </div>
  );
};

export default DashboardUser;
