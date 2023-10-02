import React from 'react';
import { ChooseFile, ProgressBarAnimation, UploadFile } from '../../components';
import './HomePage.css'


const HomePage = () => {
	return (
		<div>
			<ChooseFile />
			<UploadFile />
			{/* <ProgressBarAnimation progress={10} /> */}
		</div>
	)
}
export default HomePage