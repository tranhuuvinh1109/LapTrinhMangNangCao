import { Avatar } from 'antd';
import React from 'react';


const UserCard = ({ dataUserCard }) => {
	return (
		<div className='flex justify-center items-center'>
			<div className='flex flex-col justify-center items-center'>
				<Avatar className='flex justify-center' src={dataUserCard.avatar} alt='avatar' size='large' />
				<p className='p-0 m-0 flex justify-center'>{dataUserCard.email}</p>
			</div>
		</div>
	)
}

export default UserCard