import React from 'react';
import Link from 'next/link';

export default function GamesOverview() {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <h2 className="text-6xl text-yellow-300">Games Overview</h2>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-x-28 gap-y-8">
        <Link href="/game1">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 1
          </button>
        </Link>
        <Link href="/game2">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 2
          </button>
        </Link>
        <Link href="/game3">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 3
          </button>
        </Link>
        <Link href="/game4">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 4
          </button>
        </Link>
        <Link href="/game5">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 5
          </button>
        </Link>
        <Link href="/game6">
          <button className="border border-black rounded-md py-2 px-4 bg-yellow-300 text-lg">
            Game 6
          </button>
        </Link>
      </div>
    </div>
  );
}
