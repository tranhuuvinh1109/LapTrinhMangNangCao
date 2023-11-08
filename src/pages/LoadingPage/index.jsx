import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingPage = () => {
  return (
    <div
      className="fixed flex justify-center items-center z-[10000] top-0 bottom-0 right-0 left-0 overflow-hidden"
      style={{ background: 'rgba(0,0,0,0.5)' }}
    >
      <AiOutlineLoading3Quarters fontSize={60} className="animate-spin text-white" />
    </div>
  );
};
export default LoadingPage;
