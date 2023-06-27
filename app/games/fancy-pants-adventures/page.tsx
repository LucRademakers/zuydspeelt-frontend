import Image from 'next/image'

export default function FancyPantsAdventures() {
    
    return (
        <div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"Fancy Pants Adventures"}
            </h1>

            <div className = "grid place-items-center mt-20">
                <Image                     
                    src="/fancy-pants-adventures.jpg"                                       
                    alt="Fancy Pants Adventures" 
                    height={700}
                    width={1000}                  
                />   
            </div>           
        </div>        
    )    
}