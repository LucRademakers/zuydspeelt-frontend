"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import Navigation from '../../../navigation';
import ReactDOM from 'react-dom';
import MyGameComponent from '../../GamesContainer';

// function retrieveGame(){
//   useEffect(() => {
//   ReactDOM.render(<MyGameComponent />, document.getElementById('root'))
//   }, []);
// }

// const game = retrieveGame();


export default function Page(){
  <html>
    <head>
    </head>
    <body>
      <div id="game1"></div>
      <script>
        useEffect((ReactDOM.render(<MyGameComponent />, document.getElementById('root'))))
      </script>
    </body>
  </html>
}


// export default function GamesOverview() {
//   return (
//     <div className="bg-blue-200 bg-cover bg-center h-screen w-screen flex flex-col justify-center items-center">
//       <div>
//         <h2 className="text-4xl text-gray-700">Games Overview</h2>
//       </div>
//       <div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-8">
//         <Link href="gamesoverview/game1/pages">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 1
//           </button>
//         </Link>
//         <Link href="/game2">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 2
//           </button>
//         </Link>
//         <Link href="/game3">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 3
//           </button>
//         </Link>
//         <Link href="/game4">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 4
//           </button>
//         </Link>
//         <Link href="/game5">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 5
//           </button>
//         </Link>
//         <Link href="/game6">
//           <button className="border-black rounded-lg py-3 px-14 bg-blue-300 text-white text-sm">
//             Game 6
//           </button>
//         </Link>
//       </div>

//       {/* <div className="fixed bottom-4 right-4">
//         <Link href="/pagetwo">
//           <button className="border border-black rounded-lg py-2 px-4 bg-blue-300 text-white text-sm">
//             Go to Page Two
//           </button>
//         </Link>
//         <Link href="/pagethree">
//           <button className="border border-black rounded-lg py-2 px-4 bg-blue-300 text-white text-sm mt-2">
//             Go to Page Three
//           </button>
//         </Link>
//       </div> */}

//       <Navigation /> 
//     </div>
//   );
// }