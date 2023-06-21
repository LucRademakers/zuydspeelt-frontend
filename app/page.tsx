import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import Dropdown from "@/components/Dropdown";
import Searchbar from "@/components/Searchbar";

 

 



const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-30">

      <Searchbar />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
         
        </div>
      </div>

      <div className="flex justify-center gap-8"> 
        <div className="w-full lg:w-1/5 pr-1 border border-gray-500"> 
          <h2 className="text-2xl font-semibold mb-4 text-center">ACTION</h2>
          <table className="mt-2 ml-0">
        <thead>
          <tr>
            <th>Rank</th>
            <th className="w-32">Name</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="w-full lg:w-1/5 pr-1 border border-gray-500"> {/* Adjusted width and added right padding */}
          <h2 className="text-2xl font-semibold mb-4 text-center">PUZZLE</h2>
          <table className="mt-2 ml-0">
          <thead>
          <tr>
            <th>Rank</th>
            <th className="w-32">Name</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="w-full lg:w-1/5 pr-1 border border-gray-500"> {/* Adjusted width and added right padding */}
          <h2 className="text-2xl font-semibold mb-4 text-center">MULTIPLAYER</h2>
          <table className="mt-2 ml-0">
          <thead>
          <tr>
            <th>Rank</th>
            <th className="w-32">Name</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="w-full lg:w-1/5 pr-1 border border-gray-500"> {/* Adjusted width and added right padding */}
          <h2 className="text-2xl font-semibold mb-4 text-center">RACE</h2>
          <table className="mt-2 ml-0">
          <thead>
          <tr>
            <th>Rank</th>
            <th className="w-32">Name</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="w-full lg:w-1/5 border border-gray-500"> {/* Adjusted width */}
          <h2 className="text-2xl font-semibold mb-4 text-center">SPORT</h2>
          <table className="mt-2 ml-0">
          <thead>
          <tr>
            <th>Rank</th>
            <th className="w-32">Name</th>
            <th className="text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="w-32">Player 1</td>
            <td className="text-right">1000</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Player 2</td>
            <td className="text-right">950</td>
          </tr>
          <tr>
            <td>8</td>
            <td className="w-32">Player 3</td>
            <td className="text-right">900</td>
          </tr>
          <tr>
            <td>9</td>
            <td className="w-32">Player 4</td>
            <td className="text-right">850</td>
          </tr>
          <tr>
            <td>10</td>
            <td className="w-32">Player 5</td>
            <td className="text-right">800</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>



      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/gamesoverview">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Games Overview <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            View games overview details.
          </p>
        </div>
        </Link>
      </div> */}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

export default Home;