'use client';
// @client-component

import { useState } from 'react';

function Searchbar() {
  const [search, setSearch] = useState('');  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="relative flex items-center justify-center w-full max-w-md px-6 py-4 my-12 bg-white rounded-md shadow-md dark:bg-gray-800">
      <input 
        type="search" 
        name="search" 
        id="search" 
        className="w-full border-2 border-gray-300 p-2 rounded-md" 
        placeholder="Search..." 
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Searchbar;
;