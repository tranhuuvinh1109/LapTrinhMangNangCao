import React, { useEffect, useMemo, useState } from 'react'
import manageAPI from '../../api/manageAPI'
import { Avatar } from 'antd';
import { useParams } from 'react-router-dom';
import { LuFileX2 } from 'react-icons/lu';
import { BsFolderSymlink } from 'react-icons/bs';
import { RxValueNone } from 'react-icons/rx';
import { ProgressBarAnimation, StatusTrain } from '../../components';
import { db } from '../../firebase';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setIsLoadingAPI } from '../../redux/apiSlice/apiAction';

const UserDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [userDetail, setUserDetail] = useState({});
    const [userProjects, setUserProjects] = useState([]); //

    const getManageUserByID = async (id) => {
        const res = await manageAPI.getManageUserByID(id);
        setUserDetail(res.data.data.user);
    }

    const renderProject = useMemo(() => {
        if (userProjects && userProjects.length > 0) {
            return userProjects.map(project => (
                <div key={project.id} className="font-medium flex pl-4 py-4 items-center border-b hover:cursor-pointer hover:bg-neutral-100">
                    <div className="w-1/12 flex justify-center">{project.id}</div>
                    <div className="w-2/12 flex justify-center">{project.name}</div>
                    <div className="w-3/12 px-2 flex justify-center">
                        <StatusTrain status={project.status} />
                    </div>
                    <div className="w-4/12 px-2 flex justify-center">
                        <ProgressBarAnimation progress={project.progress} />
                    </div>
                    <div className="w-2/12 flex justify-center">
                        {project?.linkDrive ? (
                            <a
                                href={project.linkDrive}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center"
                            >
                                <BsFolderSymlink fontSize={20} />
                            </a>
                        ) : project.status === 'push to drive' ? (
                            <AiOutlineLoading3Quarters fontSize={20} className="animate-spin" />
                        ) : (
                            <LuFileX2 fontSize={20} />
                        )}
                    </div>
                </div>
            ));
        } else {
            return <div className='h-[300px] flex justify-center items-center'>
                <RxValueNone fontSize={40} />
            </div>;
        }
    }, [userProjects]);

    useEffect(() => {
        dispatch(setIsLoadingAPI(true));
        const databaseRef = ref(db, `data/user_${id}`);

        const fetchData = async () => {
            try {
                const snapshot = await new Promise((resolve, reject) => {
                    onValue(
                        databaseRef,
                        (snapshot) => {
                            resolve(snapshot);
                        },
                        reject,
                    );
                });
                const newData = [];
                snapshot.forEach((childSnapshot) => {
                    newData.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key
                    })
                });
                setUserProjects(newData);
                dispatch(setIsLoadingAPI(false));
            } catch (error) {
                console.error('Error fetching and processing data: ', error);
                dispatch(setIsLoadingAPI(false));
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        getManageUserByID(id);
    }, [id]);

    return (
        <div>
            <div className="w-full h-[250px] bg-slate-100 text-slate-700 flex items-center justify-start px-4 ">
                <div className="w-[175px] h-[175px] mr-8">
                    <Avatar
                        src={userDetail?.avatar}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="flex flex-col gap-2 text-lg">
                    <div>
                        <span><strong>ID:</strong> {userDetail?.id}</span>
                    </div>
                    <div>
                        <span><strong>Username:</strong> {userDetail?.username}</span>
                    </div>
                    <div>
                        <span><strong>Email:</strong> {userDetail?.email}</span>
                    </div>
                </div>
            </div>
            <div className="shadow-2xl">
                <div className="bg-slate-200 text-slate-500 font-medium flex pt-6 pl-4 pb-2">
                    <div className="w-1/12 flex justify-center">Id</div>
                    <div className="w-2/12 flex justify-center">Project Name</div>
                    <div className="w-3/12 px-2 flex justify-center">Status</div>
                    <div className="w-4/12 px-2 flex justify-center">Progress</div>
                    <div className="w-2/12 flex justify-center">Link Drive</div>
                </div>
                <div>
                    {renderProject}
                </div>
            </div>
        </div>
    )
}

export default UserDetail