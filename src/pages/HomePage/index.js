import React, { useEffect } from 'react';
import { ChooseFile } from '../../components';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('CNN_TOKEN');
    if (!token) {
      navigate('/auth');
    }
  }, []);
  return (
    <div>
      <ChooseFile />
    </div>
  );
};
export default HomePage;
