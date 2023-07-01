import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <main>

      <Link href='/'>Home</Link>

      <div className="header-links right">
      <Link href='/leaderboard/Sport'>Leaderboard</Link>
      </div>

      <p  className='text-2xl text-center mt-[50px] mb-[50px]'>SPORT</p>

      <div className='grid grid-cols-4 gap-4 ml-[100px] mr-[100px]'>

        <div className='border-black border-[3px] rounded-lg h-[50px]'>
          <h1 className='text-center mt-[5px]'>SPEL 1</h1> 
        </div>
        
        <div className='border-black border-[3px] rounded-lg h-[50px]'>
          <h1 className='text-center mt-[5px]'>SPEL 2</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[50px]'>
          <h1 className='text-center mt-[5px]'>SPEL 3</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[50px]'>
          <h1 className='text-center mt-[5px]'>SPEL 4</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[100px]'>
      
        </div>

        <div className='border-black border-[3px] rounded-lg h-[100px]'>
        
        </div>

        <div className='border-black border-[3px] rounded-lg h-[100px]'>
         
        </div>

        <div className='border-black border-[3px] rounded-lg h-[100px]'>
       
        </div>

        <div className='border-black border-[3px] rounded-lg h-[300px] p-3'>
          <h1 className='text-center mt-[5px]'>BESCHRIJVING</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, velit tempus semper rhoncus, metus libero suscipit ipsum, in fermentum eros libero id magna.</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[300px] p-3'>
          <h1 className='text-center mt-[5px]'>BESCHRIJVING</h1>
          <h1 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, velit tempus semper rhoncus, metus libero suscipit ipsum, in fermentum eros libero id magna.</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[300px] p-3 scroll-m-2 bg-scroll'>
          <h1 className='text-center mt-[5px]'>BESCHRIJVING</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, velit tempus semper rhoncus, metus libero suscipit ipsum, in fermentum eros libero id magna.</h1>
        </div>

        <div className='border-black border-[3px] rounded-lg h-[300px] p-3'>
          <h1 className='text-center mt-[5px]'>BESCHRIJVING</h1>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, velit tempus semper rhoncus, metus libero suscipit ipsum, in fermentum eros libero id magna.</h1>
        </div>
      </div>
      
    </main>
  )
}

export default Home;