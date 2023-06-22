import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';

const Page2 = () => {
    return (
      <div className="bg-blue-200 bg-cover bg-center h-screen flex flex-col justify-center items-center">
        <div>
          <h2 className="text-4xl text-gray-700">Page 2</h2>
        </div>
        <div className="mt-12">
          <Link href="/page1">
            <button className="border border-black rounded-lg py-2 px-4 bg-blue-300 text-white text-sm">
              Go to Page 1
            </button>
          </Link>
          <Link href="/page3">
            <button className="border border-black rounded-lg py-2 px-4 bg-blue-300 text-white text-sm ml-4">
              Go to Page 3
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Page2;