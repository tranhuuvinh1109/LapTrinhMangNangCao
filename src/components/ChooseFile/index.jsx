import React, { useState } from 'react';
import { AiOutlineFileZip, AiOutlineFileAdd } from 'react-icons/ai';
import './ChooseFile.css';
import projectAPI from '../../api/projectAPI';

const ChooseFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

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
    if (selectedFile) {
      try {
        // setSelectedFile(null);
        const today = new Date();
        const res = await projectAPI.uploadDataset({
          user_id: 1,
          file: selectedFile,
          create_at: `${today.getDate()}-${
            today.getMonth() + 1
          }-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
        });

        console.log('Upload response', res);
      } catch (error) {
        console.error('Upload error', error);
      }
    }
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="chooseFileContainer" onDrop={handleDrop} onDragOver={preventDefault}>
      <form className="chooseFileForm" onSubmit={handleUpload}>
        <div className="chooseFileFormContent">
          <div className="chooseFileFormContentIcon">
            <AiOutlineFileZip className="" fontSize={50} />
          </div>
          {selectedFile ? (
            <>
              <p className="p-0 mx-4 text-center text-white">{selectedFile.name}</p>
              <button type="submit" className="px-4 py-2 bg-red-400 font-medium text-white rounded-lg hover:bg-red-500">
                Upload
              </button>
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
      <p className="mt-10 italic font-medium" onClick={() => console.log(selectedFile)}>
        Note: For the model to be highly accurate, your file requirement is a dataset file consisting of many dataset
        images and the image file is the label name of each object.
      </p>
    </div>
  );
};

export default ChooseFile;
