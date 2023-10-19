import React, { useMemo } from 'react';
import { Popover, Avatar, Divider } from 'antd';
import { PiSignOutFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/userSlice/userAction';

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const color = ColorList[getRandomInt(ColorList.length)];
const AvatarPopover = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const content = useMemo(() => {
    const handleLogout = () => {
      dispatch(logoutUser());
      navigate('/auth');
    };
    return (
      <div>
        <div className="flex items-center py-2">
          {user?.avatar.includes('http') ? (
            <Avatar src={user.avatar} alt="avatar" size="large" />
          ) : (
            <Avatar
              style={{
                backgroundColor: color,
                verticalAlign: 'middle',
                height: '40px',
              }}
              size="large"
              gap={4}
            >
              {user?.username
                .split(' ')
                .map((word) => word.charAt(0))
                .join('')}
            </Avatar>
          )}
          <div className="ml-2">
            <h6 className="m-0">{user?.email}</h6>
            <p className="m-0">{user?.username}</p>
          </div>
        </div>
        <Divider className="m-0 p-0" />
        <ul className="p-0 m-0 mt-2">
          <li className="flex items-center hover:bg-slate-100 py-1 px-2 cursor-pointer" onClick={handleLogout}>
            <PiSignOutFill fontSize={18} />
            <span className="ml-2 font-medium">Logout</span>
          </li>
        </ul>
      </div>
    );
  }, [user, navigate]);
  return (
    <Popover content={content} trigger="click">
      {user?.avatar.includes('http') ? (
        <Avatar src={user.avatar} alt="avatar" size="large" />
      ) : (
        <Avatar
          style={{
            backgroundColor: color,
            verticalAlign: 'middle',
            height: '40px',
          }}
          size="large"
          gap={4}
        >
          {user?.username
            .split(' ')
            .map((word) => word.charAt(0))
            .join('')}
        </Avatar>
      )}
    </Popover>
  );
};

export default AvatarPopover;
