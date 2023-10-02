import React, { useState } from 'react';
import './UploadFile.css';
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'
import { AiFillFileZip } from 'react-icons/ai'
import axiosClient from '../../api/axiosClient';

function UploadFile () {
	const [selectedFile, setSelectedFile] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const [uploadProgress, setUploadProgress] = useState(0);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedFile(file);
		}
	};

	const handleUpload = () => {
		if (selectedFile) {
			setUploading(true);
			const formData = new FormData();
			formData.append('file', selectedFile);

			axiosClient
				.post('/upload', formData, {
					onUploadProgress: (progressEvent) => {
						const loaded = progressEvent.loaded;
						const total = progressEvent.total;
						const progress = (loaded / total) * 100;
						setUploadProgress(progress);
					},
				})
				.then((response) => {
					const { originalname, size } = response.data;
					console.log(`File uploaded successfully: ${originalname}, Size: ${size} bytes`);
					setUploading(false);
					setSelectedFile(null);
					setUploadProgress(0);
				})
				.catch((error) => {
					console.error('Error uploading file: ', error);
					setUploading(false);
					setUploadProgress(0);
				});
		}
	};

	return (
		<div className="upload-container">
			<input
				type="file"
				id="file-input"
				className="file-input hidden"
				onChange={ handleFileChange }
			// accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
			/>
			<label htmlFor="file-input" className="file-label">
				<FaCloudUploadAlt />
				<span>
					Choose File
				</span>
			</label>
			{ selectedFile && (
				<div className="selected-file">
					Selected File: { selectedFile.name }
				</div>
			) }
			<button
				className="upload-button"
				onClick={ handleUpload }
				disabled={ uploading || !selectedFile }
			>
				Upload
			</button>
			{ uploading && (
				<div className="uploading">
					Uploading... { uploadProgress.toFixed(2) }%
				</div>
			) }
			<div className="uploaded-files">
				{ uploadedFiles.map((file, index) => (
					<div key={ index } className="uploaded-file">
						<span className="file-name">{ file.name }</span>
						<span className="file-size">
							Size: { Math.round(file.size / 1024) } KB
						</span>
					</div>
				)) }
			</div>
		</div>
	);
}

export default UploadFile;
