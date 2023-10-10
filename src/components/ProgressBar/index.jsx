import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progressBar">
      <div className={`progressPercent ${progress === 100 ? 'done' : ''}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
