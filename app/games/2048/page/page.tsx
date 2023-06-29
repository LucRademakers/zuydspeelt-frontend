import Searchbar from "@/components/Searchbar"
import Link from 'next/link';
import Image from 'next/image'

export default function AlexInDanger() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div>
                {<Searchbar />}
            </div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"Alex In Danger"}
            </h1>

            <div className = "grid place-items-center mt-20">
                <Image                     
                    src="/alex-in-danger.jpg"                                       
                    alt="Alex In Danger" 
                    height={700}
                    width={1000}                  
                />   
            </div>           
        </div>        
    )    
}