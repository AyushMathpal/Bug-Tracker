// SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css'; // Replace with the actual path

const SearchBar = ({ onSearch,onReset }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };
  const handleReset = () => {
    setSearchTerm('');
    // If onReset is provided, call it to reset the user list
    if (typeof onReset === 'function') {
      onReset();
    }
  };
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>
      <button onClick={handleReset} className={styles.resetButton}>Reset</button>
    </div>
  );
};

export default SearchBar;
