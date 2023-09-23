import { Avatar } from 'antd';
import React from 'react';


const UserCard = ({ dataUserCard }) => {
	return (
		<div className='flex justify-center items-center'>
			<div>
				<Avatar src={ dataUserCard.avatar } alt='avatar' size='large' />
				<p className='p-0 m-0'>{ dataUserCard.email }</p>
			</div>

		</div>
	)
}

export default UserCard