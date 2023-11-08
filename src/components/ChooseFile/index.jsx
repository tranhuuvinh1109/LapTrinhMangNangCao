import React, { useState } from 'react';
import { AiOutlineFileZip, AiOutlineFileAdd } from 'react-icons/ai';
import { notification } from 'antd';
import projectAPI from '../../api/projectAPI';
import { useDispatch } from 'react-redux';
import { setIsLoadingAPI } from '../../redux/apiSlice/apiAction';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import HDSD from '../../assets/images/hdsd.jpg';
import './ChooseFile.css';

const ChooseFile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState(null);
  const [nameProject, setNameProject] = useState('');
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.success({
      message: `Notification `,
      description: `Upload file successfully, prepare to train the model!`,
      placement,
    });
  };

  const hanldeInputChange = (e) => {
    setNameProject(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (selectedFile && nameProject.trim() !== '') {
      dispatch(setIsLoadingAPI(true));
      try {
        const today = new Date();
        const res = await projectAPI.createProject({
          user_id: user.user.id,
          file: selectedFile,
          name: nameProject,
          create_at: `${today.getDate()}-${
            today.getMonth() + 1
          }-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
        });
        if (res.status === 200) {
          openNotification('bottomRight');
        }
        setSelectedFile(null);
      } catch (error) {
        console.error('Upload error', error);
      }
      dispatch(setIsLoadingAPI(false));
    } else {
      toast.error('Please enter name project !');
    }
    setNameProject('');
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div id="chooseFile" className="chooseFileContainer" onDrop={handleDrop} onDragOver={preventDefault}>
      {contextHolder}
      <form className="chooseFileForm" onSubmit={handleUpload} encType="multipart/form-data">
        <div className="chooseFileFormContent">
          <div className="chooseFileFormContentIcon">
            <AiOutlineFileZip className="" fontSize={50} />
          </div>
          {selectedFile ? (
            <>
              <p className="p-0 mx-4 text-center text-white">{selectedFile.name}</p>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="px-2 py-1"
                  placeholder="Name Project"
                  onChange={hanldeInputChange}
                  value={nameProject}
                />
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 bg-red-400 font-medium text-white rounded-lg hover:bg-red-500"
                >
                  Upload
                </button>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="file" className="chooseFileFormContentButton">
                <AiOutlineFileAdd fontSize={24} />
                <span className="chooseFileFormContentButtonText">Choose File</span>
              </label>
              <input type="file" id="file" name="file" className="hidden" onChange={handleFileChange} />
              <p className="chooseFileFormContentBottom text-center" onClick={() => console.log(selectedFile)}>
                Or drop files here
              </p>
            </>
          )}
        </div>
      </form>
      <div className="flex items-center justify-center">
        <img src={HDSD} alt="HDSD" className="w-[30%]" />
      </div>
      <p className="mt-4 italic font-medium text-center" onClick={() => openNotification('bottomRight')}>
        Note: For the model to be highly accurate, your file requirement is a dataset file consisting of many dataset
        images and the image file is the label name of each object.
      </p>
    </div>
  );
};

export default ChooseFile;
