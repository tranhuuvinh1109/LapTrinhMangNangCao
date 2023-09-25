import React from 'react';
import { dataTable } from '../../const';
import { Table } from '../../components';


const UserMember = () => {
	return (
		<div>
			<Table dataTable={ dataTable } />
		</div>
	)
}

export default UserMember