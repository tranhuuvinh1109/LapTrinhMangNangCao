import React, { useState } from 'react';
import { AiOutlineFileZip, AiOutlineFileAdd } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
import { AiFillFileZip } from 'react-icons/ai'
import ProgressBarAnimation from '../ProgressBarAnimation';
import './ChooseFile.css';


const FileItem = ({ file, progress }) => {
	return (
		<div className='flex items-center p-3 bg-sky-100 mb-2 rounded'>
			<div className='w-2/12 text-left'>
				<AiFillFileZip fontSize={ 34 } className='text-sky-600' />
			</div>
			<div className='w-10/12'>
				<div className='flex items-center mb-1 w-full'>
					<p className='m-0 p-0 truncate w-6/12'>{ file?.name }</p>
					<p className='m-0 p-0 w-4/12 font-medium'>-
						{
							progress === 100 ? 'Done' : 'Uploading'
						}
					</p>
					{
						progress === 100 ?
							<p className='m-0 p-0 w-1/12 text-right'><MdDone fontSize={ 20 } /></p>
							:
							<p className='m-0 p-0 w-1/12 text-right'>{ progress }%</p>
					}
				</div>
				{
					progress === 100 ?
						<p className='m-0 p-0 text-xs'>{ file?.size } KB</p>
						:
						<ProgressBarAnimation progress={ progress } size='small' />
				}
			</div>
		</div>
	)
}


const ChooseFile = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		console.log('change')
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

	const preventDefault = (event) => {
		event.preventDefault();
	};
	return (
		<div className='chooseFileContainer' onDrop={ handleDrop }
			onDragOver={ preventDefault }>
			<form className='chooseFileForm'>
				<div className='chooseFileFormContent'>
					<div className='chooseFileFormContentIcon'>
						<AiOutlineFileZip className='' fontSize={ 50 } />
					</div>
					<label htmlFor='file' className='chooseFileFormContentButton'>
						<AiOutlineFileAdd fontSize={ 24 } />
						<span className='chooseFileFormContentButtonText'>
							Choose File
						</span>
					</label>
					<input type="file" id='file' name='file' className='hidden' onChange={ handleFileChange } />
					<p className='chooseFileFormContentBottom text-center' onClick={ () => console.log(selectedFile) }>
						Or drop files here
					</p>
				</div>
			</form>

			<p className='mt-10 italic font-medium'>
				Note: For the model to be highly accurate, your file requirement is a dataset file consisting of many dataset images and the image file is the label name of each object.
			</p>
			{
				selectedFile &&
				<div className='flex justify-center items-center'>
					<div className='w-5/12'>
						<FileItem file={ selectedFile } progress={ 50 } />
						<FileItem file={ selectedFile } progress={ 100 } />
						<FileItem file={ selectedFile } progress={ 80 } />
					</div>
				</div>
			}

		</div>
	)
}

export default ChooseFile