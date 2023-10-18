import React from 'react';
import { ChooseFile, TableProjects } from '../../components';
import './HomePage.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const project = useSelector((state) => state.project);

  return (
    <div>
      <ChooseFile />
      <div>
        <TableProjects projects={project.project} className="" />
      </div>
    </div>
  );
};
export default HomePage;
