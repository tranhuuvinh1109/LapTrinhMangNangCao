import React, { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDebounce } from '../../hooks';
import './SearchBox.css';

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
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setResultValue(json);
      });
    setIsLoading(false);
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
      {resultValue && <div className="search-value shadow-xl">searchValue</div>}
    </div>
  );
};
export default SearchBox;
