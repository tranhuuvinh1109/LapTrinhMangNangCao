import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const LayoutPage = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default LayoutPage