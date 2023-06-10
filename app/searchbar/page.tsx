'use client';
// @client-component

import React, { useState } from 'react';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  // Hier kan later misschien vanuit de database games worden toegevoegd.
  const games = [
    'Tic Tac Toe',
    'The World\'s Hardest Game',
    'GTA 6',
    'Vuurjongen en Watermeisje',
    'Fancy Pants Adventures',
    'Shoppingcart Hero',
    'A Koopa\'s Revenge',
    'Super Mario 63',
    'Minecraft',
    'Enough Plumbers',
    'Dutchman Dash',
    'Bullet Bill',
  ];

  const filteredGames = games.filter((game) =>
    game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGameClick = (game) => {
    console.log(`Clicked on game: ${game}`);
  };

  return (
    <div
      style={{
        width: '320px',
        height: '86px',
        left: '48px',
        top: '213px',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search games..."
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
        
      />

      {searchTerm && (
        <ul className="mt-4">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <li
                key={game}
                onClick={() => handleGameClick(game)}
                className="cursor-pointer py-1 hover:bg-gray-100"
              >
                {game}
              </li>
            ))
          ) : (
            <li>No matching games found.</li>
          )}
        </ul>
      )}
    </div>
  );
}