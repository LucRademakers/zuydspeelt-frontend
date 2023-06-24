import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="fixed bottom-20 right-20">
      <Link href="/gamesoverview/page2">
        <button className="border border-gray-300 rounded-full py-2 px-4 bg-blue-500 text-white">
          Page 2
        </button>
      </Link>
    </div>
  );
};

export default Navigation;