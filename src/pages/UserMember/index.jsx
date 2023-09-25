import React from 'react';
import { TableCard } from '../../components';
import { userTable, viewColumns } from '../../const';

const UserMember = () => {
	return (
		<div>
			<TableCard dataCard={userTable} viewColumns={viewColumns} />
		</div>

	)
}

export default UserMember