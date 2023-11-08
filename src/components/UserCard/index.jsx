import { Avatar } from 'antd';
import React from 'react';

const UserCard = ({ dataUserCard }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {dataUserCard?.avatar ? (
          <Avatar src={dataUserCard.avatar} alt="avatar" size="large" />
        ) : (
          <Avatar src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" size="large" />
        )}

        <p className="p-0 m-0 flex justify-center">{dataUserCard?.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
