import Searchbar from "@/app/searchbar/page"
import Link from 'next/link';

export default function TheImpossibleQuiz() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {<Searchbar />}
            </div>

            <h1 style={{ fontWeight: 'bold', fontSize: '40px', display: 'grid', placeItems: 'center' }}>
                The Impossible Quiz
            </h1>

            <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
                <img  
                    src="/the-impossible-quiz.jpg" 
                    style={{ height: '500px', width: '800px' }}
                />   
            </div>
            
        </div>

        
    )
    
}