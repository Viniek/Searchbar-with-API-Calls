import React, { useState } from 'react';
import './Searchbar.css';
import { CiSearch } from 'react-icons/ci';

function Searchbar() {
  const [input, setInput] = useState('');

  const fetchData = async (value) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      
      // Filtering the data based on input value
      const results = json.filter((user) =>
        value &&
        user && 
        user.name && 
        user.name.toLowerCase().includes(value.toLowerCase().includes(value)
      ));
    
      setResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    if (value) {
      fetchData(value);
    }
  };

  return (
    <div className='search'>
      <CiSearch className='searchicon' />
      <input
        type='text'
        placeholder='Type to search ...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
