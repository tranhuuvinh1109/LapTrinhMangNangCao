import React, { useState, useEffect } from 'react';
import { Avatar, Divider } from 'antd';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDebounce } from '../../hooks';
import searchAPI from '../../api/searchAPI';
import { Link } from 'react-router-dom';
import { SiOpenproject } from 'react-icons/si';
import './SearchBox.css';

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const color = ColorList[getRandomInt(ColorList.length)];

const SearchBox = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [resultValue, setResultValue] = useState(null);
  const debouncedInputValue = useDebounce(searchValue);

  const handleChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (!debouncedInputValue.trim()) {
      setResultValue(null);
      return;
    }
    setIsLoading(true);
    searchAPI
      .search(encodeURIComponent(debouncedInputValue))
      .then((res) => {
        if (res.status === 200) {
          setResultValue(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedInputValue]);

  return (
    <div className="search-box">
      <div className="input-box">
        <input type="text" placeholder="Search..." value={searchValue} onChange={handleChangeInput} />
        {isLoading ? (
          <span className="icon-search">
            <AiOutlineLoading3Quarters className=" animate-spin" />
          </span>
        ) : (
          <BiSearchAlt className="icon-search" />
        )}
      </div>
      {resultValue && (
        <div className="search-value shadow-xl px-4 py-2">
          <Divider orientation="left">
            <h6 className="text-xl">User</h6>
          </Divider>
          <div>
            {resultValue?.users?.map((user) => {
              return (
                <Link to={`user/${user.id}`} className="no-underline text-black">
                  <div className="flex items-center px-2 py-1 rounded-md hover:bg-slate-200 hover:cursor-pointer mt-2">
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
                      <h6 className="m-0">{user.username}</h6>
                      <h6 className="m-0 mt-1">{user.email}</h6>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <Divider orientation="left">
            <h6 className="text-xl">Project</h6>
          </Divider>
          <div className="">
            {resultValue?.projects?.map((project) => {
              return (
                <Link to={`project/${project.id}`} className="no-underline text-black">
                  <div className="flex items-center px-2 py-1 rounded-md hover:bg-slate-200 hover:cursor-pointer">
                    <SiOpenproject fontSize={26} />
                    <div className="ml-4">
                      <h6 className="m-0">Name: {project.name}</h6>
                      <h6 className="m-0 mt-1">Creator: {project.user.username}</h6>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBox;
