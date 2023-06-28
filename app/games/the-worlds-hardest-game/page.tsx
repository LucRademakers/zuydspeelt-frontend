import Image from 'next/image'

export default function TheWorldsHardestGame() {
    
    return (
        <div>

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