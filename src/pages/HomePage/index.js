import React from 'react';
import { ChooseFile, Navbar } from '../../components';
import './HomePage.css'


const HomePage = () => {
	return (
		<div>
			<Navbar />
			<div>
			<ChooseFile />
			</div>
		</div>
		
	)
}
export default HomePage