import Searchbar from "@/components/Searchbar"
import Link from 'next/link';
import Image from 'next/image'

export default function TheImpossibleQuiz() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div>
                {<Searchbar />}
            </div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"The Impossible Quiz"}
            </h1>

            <div className = "grid place-items-center mt-20">
                <Image                     
                    src="/the-impossible-quiz.jpg"                                       
                    alt="The Impossible Quiz" 
                    height={700}
                    width={1000}                  
                />   
            </div>           
        </div>        
    )    
}