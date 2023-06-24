import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';

const Pagethree = () => {
  return (
    <div>
      <h2 className="text-gray-700">Pagethree</h2>
      <Link href="/page1">
        <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
          Go to Page 3
        </button>
      </Link>
    </div>
  );
};

export default Pagethree;