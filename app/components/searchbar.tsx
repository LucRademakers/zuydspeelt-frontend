'use client';
// @client-component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  

  // Hier kan later misschien vanuit de database games worden toegevoegd.
  const games = [
    { name: 'Tic Tac Toe', link: '/games/tic-tac-toe' },
    { name: 'The World\'s Hardest Game', link: '/games/the-worlds-hardest-game' },
    { name: 'The Impossible Quiz', link: '/games/the-impossible-quiz' },
    { name: 'Fancy Pants Adventures', link: '/games/fancy-pants-adventures' },
    { name: 'Alex In Danger', link: '/games/alex-in-danger' }    
  ];

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Wanneer op een game geklikt wordt, wordt de gebruiker naar het desbetreffende spel gestuurd.
  const handleGameClick = (game: string) => {
    
    const gameLink = games.find((item) => item.name === game)?.link;   

    if (gameLink) {
      router.push(gameLink);
    }    
  };

  return (
  <div 
  style ={{ display: 'flex', 
  justifyContent: 'center', 
  position: 'absolute', 
  top:'0', 
  zIndex: 100,
  }}
  >
    <div
      style={{
        width: '320px',
        height: '86px',
        margin: '0 auto',
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
      <div className="search-results" style={{ backgroundColor: 'whitesmoke' , padding: '10px' }}>
        <ul className="mt-4">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <li
                key={game.name}
                onClick={() => handleGameClick(game.name)}
                className="cursor-pointer py-1 hover:bg-gray-200"
              >
                <Link legacyBehavior href={game.link}>
                  <a>{game.name}</a>
                </Link>
              </li>
            ))
          ) : (
            <li>No matching games found.</li>
          )}
        </ul>
      </div>
      )}
      
    </div>
    </div>
  );
}