import Image from 'next/image'

export default function TicTacToe() {
    
    return (
        <div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"Tic Tac Toe"}
            </h1>

            <div className = "grid place-items-center mt-20">
                <Image                     
                    src="/tic-tac-toe.jpg"                                       
                    alt="Tic Tac Toe" 
                    height={700}
                    width={1000}                  
                />   
            </div>           
        </div>        
    )    
}