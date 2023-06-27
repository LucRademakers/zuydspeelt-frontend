import React from 'react';
import Link from 'next/link';

function page3 () {
  return (
    <div className="bg-blue-200 h-screen flex items-center justify-center">
      <h1 className="text-4xl text-gray-700">Page 3</h1>
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

export default page3