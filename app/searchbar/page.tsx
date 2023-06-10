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
    // Hier kan een link geplaatst worden naar de desbetreffende pagina van het spel.
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search games..."
      />

      {searchTerm && (

      <ul>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <li key={game} onClick={() => handleGameClick(game)}>
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
