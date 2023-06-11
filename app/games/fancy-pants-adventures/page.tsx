import Searchbar from "@/app/searchbar/page"
import Link from 'next/link';

export default function FancyPantsAdventures() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {<Searchbar />}
            </div>

            <h1 style={{ fontWeight: 'bold', fontSize: '40px', display: 'grid', placeItems: 'center' }}>
                Fancy Pants Adventures
            </h1>

            <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
                <img  
                    src="/fancy-pants-adventures.jpg" 
                    style={{ height: '500px', width: '800px' }}
                />   
            </div>
            
        </div>

        
    )
    
}