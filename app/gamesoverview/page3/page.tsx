import React from 'react';
import Link from 'next/link';

export default function page3 () {
  return (
    <div className="bg-blue-200 bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <h2 className="text-4xl text-gray-700">Games Overview</h2>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-8">
        <Link href="/game1">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
        <Link href="/game2">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
        <Link href="/game3">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
        <Link href="/game4">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
        <Link href="/game5">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
        <Link href="/game6">
          <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
            Game x
          </button>
        </Link>
      </div>      
      <div className="fixed bottom-20 right-20">
      <Link href="gamesoverview">
        <button className="border border-gray-300 rounded-full py-2 px-4 bg-blue-500 text-white">
          1
        </button>
      </Link>
      <Link href="gamesoverview/page2">
        <button className="border border-gray-300 rounded-full py-2 px-4 bg-blue-500 text-white">
          2
        </button>
      </Link>
      <Link href="gamesoverview/page3">
        <button className="border border-gray-300 rounded-full py-2 px-4 bg-blue-300 text-white">
          3
        </button>
      </Link>
      </div>  
      </div>
  );
};