import React from 'react';
import Link from 'next/link';

function page2 () {
  return (
    <div className="bg-blue-200 h-screen flex items-center justify-center">
      <h1 className="text-4xl text-gray-700">Page 2</h1>
      <div className="fixed bottom-20 right-20">
      <Link href="gamesoverview">
        <button className="border border-gray-300 rounded-full py-2 px-4 bg-blue-500 text-white">
          Page 1
        </button>
      </Link>
      </div>
    </div>
    
  );
};

export default page2