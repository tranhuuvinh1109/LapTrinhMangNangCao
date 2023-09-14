import React from 'react';
import './LayoutAdmin.css'
import { Link, Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
	return (
		<div>
			<Link to='/'>Return home</Link>
			<Outlet />
		</div>
	)
}

export default LayoutAdmin