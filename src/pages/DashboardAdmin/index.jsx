import React, { PureComponent, useRef, useState } from 'react';
import webServerImage from '../../assets/images/WEB_SERVER_PNG.png';
import workerImage from '../../assets/images/SERVICE_WORKER_PNG.png';
import active from '../../assets/images/ACTIVE.png';
import inactive from '../../assets/images/INACTIVE.png';
import Xarrow from 'react-xarrows';
import toast from 'react-hot-toast';
import manageAPI from '../../api/manageAPI';
import './DashboardAdmin.css';

const DashboardAdmin = () => {
  const [worker1Status, setWorker1Status] = useState(true);
  const worker2Status = false;

  const webServer = useRef(null);

  const handleClickCheckWorker = async () => {
    console.log(1);
    const res = await manageAPI.getWorkerStatus();
    if (res.status === 200) {
      toast.success('Worker 1 is running ...');
      setWorker1Status(true);
    } else {
      toast.error('Worker 1 inactived ...');
      setWorker1Status(false);
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[100px] flex justify-start">
          <button
            className="m-4 bg-orange-400 p-4 flex items-center justify-center rounded-lg"
            onClick={handleClickCheckWorker}
          >
            <span className="text-white">Check worker status</span>
          </button>
        </div>
        <div className="w-full h-full flex ">
          <div className="w-1/2 h-full flex items-center justify-center">
            <div ref={webServer} className="flex flex-col">
              <div className="w-[125px] h-fit">
                <img src={webServerImage} alt="web server img" />
              </div>
              <span className="text-center text-lg font-bold">Web Server</span>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <div className="h-1/2 w-full flex flex-col items-center justify-center">
              <div className="w-[75px] h-fit" id="worker1">
                <img src={workerImage} alt="worker1 img" />
              </div>
              <div className="flex gap-2 justify-center items-center">
                <span className="text-lg font-bold">Worker 1</span>
                {worker1Status ? (
                  <img src={active} alt="" style={{ width: 'auto', height: '20px' }} />
                ) : (
                  <img src={inactive} alt="" style={{ width: 'auto', height: '20px' }} />
                )}
              </div>
            </div>
            <Xarrow
              lineColor={worker1Status ? '#1eb300' : 'red'}
              showHead={false}
              dashness
              curveness={0}
              start={webServer}
              end="worker1"
            />
            <div className="h-1/2 w-full flex flex-col items-center justify-center">
              <div className="w-[75px] h-fit" id="worker2">
                <img src={workerImage} alt="worker2 img" />
              </div>
              <div className="flex gap-2 justify-center items-center">
                <span className="text-lg font-bold">Worker 2</span>
                {worker2Status ? (
                  <img src={active} alt="" style={{ width: 'auto', height: '20px' }} />
                ) : (
                  <img src={inactive} alt="" style={{ width: 'auto', height: '20px' }} />
                )}
              </div>
            </div>
            <Xarrow
              lineColor={worker2Status ? '#1eb300' : 'red'}
              showHead={false}
              dashness
              curveness={0}
              start={webServer}
              end="worker2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
