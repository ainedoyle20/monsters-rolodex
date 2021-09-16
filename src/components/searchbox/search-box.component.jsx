import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ onInputChange }) => {
  return (
    <div>
      <input className="search-box" type="search" placeholder="search monsters" onChange={onInputChange} />
    </div>
  );
}

export default SearchBox;