import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';

const Pagetwo = () => {
  return (
    <div>
      <h2 className="text-gray-700">Page 1</h2>
      <Link href="/page2">
        <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
          Go to Page 2
        </button>
      </Link>
    </div>
  );
};

export default Pagetwo;