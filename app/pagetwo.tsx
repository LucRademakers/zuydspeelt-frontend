import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';

const Pagetwo = () => {
  return (
    <div>
      <h2 className="text-gray-700">Page Two</h2>
      <Link href="/pagetwo">
        <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
          Go to Pagetwo
        </button>
      </Link>
      <Link href="/page3">
        <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
          Go to Page 3
        </button>
      </Link>
    </div>
  );
};

export default Pagetwo;