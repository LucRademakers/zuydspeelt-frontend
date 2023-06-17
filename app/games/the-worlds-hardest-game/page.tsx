import Searchbar from "@/app/components/searchbar"
import Link from 'next/link';
import Image from 'next/image'

export default function TheWorldsHardestGame() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div>
                {<Searchbar />}
            </div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"The World's Hardest Game"}
            </h1>

            <div className = "grid place-items-center mt-20">
                <Image                     
                    src="/the-worlds-hardest-game.jpg"                                       
                    alt="The World's Hardest Game" 
                    height={700}
                    width={1000}                  
                />   
            </div>           
        </div>   
    )   
}