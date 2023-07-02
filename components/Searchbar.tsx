'use client';
// @client-component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useFetch from '@/hooks/useFetch';
import { API_ENDPOINT } from '@/constants/apiConstants';
import { Game } from '@/types/models';


export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { data: games, error: gamesError } = useFetch<Game[]>(API_ENDPOINT.GAMES);

/*
  if (gamesError) {
    console.error("SEARHCBAR ERROR " + gamesError);
  }
*/

  const filteredGames = games ? games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.title.localeCompare(b.title)) : [];

  // Wanneer op een game geklikt wordt, wordt de gebruiker naar het desbetreffende spel gestuurd.
  const handleGameClick = (game: string) => {

    const gameLink = games?.find((item) => item.title);

    if (gameLink) {
      router.push(gameLink.title);
    }
  };

  return (
    <div className="flex justify-center top-0 w-full mt-2.5 absolute z-10">
      <div className="w-80 filter drop-shadow-md absolute">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search games..."
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:bg-white focus:outline-none"
        />

        {searchTerm && (
          <div className="search-results bg-whitesmoke p-0">
            <ul className="max-h-80 overflow-y-auto mt-1 text-gray-700 bg-white p-2 rounded-md">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (                  
                  <li
                    key={game.id}
                    onClick={() => handleGameClick(game.title)}
                    className="cursor-pointer py-1 hover:bg-gray-200"
                  >
                    <Link legacyBehavior href={game.title}>
                      <a>{game.title}</a>
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

