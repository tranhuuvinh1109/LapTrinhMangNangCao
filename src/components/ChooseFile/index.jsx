import React, { useState } from 'react';
import { AiOutlineFileZip, AiOutlineFileAdd } from 'react-icons/ai';
import './ChooseFile.css';

const ChooseFile = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		console.log('change')
		const file = event.target.files[0];
		if (file) {
			setSelectedFile(file);
			// You can do further processing with the selected file here
		}
	};

	const handleDrop = (event) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		console.log('drop', file)
		if (file) {
			setSelectedFile(file);
			// You can do further processing with the dropped file here
		}
	};

	const preventDefault = (event) => {
		event.preventDefault();
	};
	return (
		<div className='chooseFileContainer' onDrop={handleDrop}
			onDragOver={preventDefault}>
			<form className='chooseFileForm'>
				<div className='chooseFileFormContent'>
					{
						selectedFile ? <p>{selectedFile?.name}</p>
							:
							<>
								<div className='chooseFileFormContentIcon'>
									<AiOutlineFileZip className='' fontSize={50} />
								</div>
								<label htmlFor='file' className='chooseFileFormContentButton'>
									<AiOutlineFileAdd fontSize={24} />
									<span className='chooseFileFormContentButtonText'>
										Choose File
									</span>
								</label>
								<input type="file" id='file' name='file' className='hidden' onChange={handleFileChange} />
								<p className='chooseFileFormContentBottom text-center' onClick={() => console.log(selectedFile)}>
									Or drop files here
								</p>
							</>
					}
				</div>
			</form>

			<p className='mt-10 italic font-medium'>
				Note: For the model to be highly accurate, your file requirement is a dataset file consisting of many dataset images and the image file is the label name of each object.
			</p>
		</div>
	)
}

export default ChooseFile