import React from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Navigation from './navigation';

export default function GamesOverview() {
  return (
    <div className="bg-blue-200 bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <h2 className="text-4xl text-gray-700">Games Overview</h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-8">
        <Link href="games/tic-tac-toe/index.html">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            tic-tac-toe
          </button>
        </Link>
        <Link href="games/2048/src/actions">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            2048
          </button>
        </Link>
        <Link href="games/snake/src/index.html">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Snek
          </button>
        </Link>
        <Link href="/game4">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game 4
          </button>
        </Link>
        <Link href="/game5">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game 5
          </button>
        </Link>
        <Link href="/game6">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game 6
          </button>
        </Link>
      </div>
      <Navigation />
    </div>
  );
}