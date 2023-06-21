import Searchbar from "@/components/Searchbar"
import Link from 'next/link';
import Image from 'next/image'

export default function Sport() {
    
    return (
        <div>
            <Link href='/'>Home</Link>                        

            <div>
                {<Searchbar />}
            </div>

            <h1 className = "font-bold text-4xl grid place-items-center mt-20">
                {"Sport"}
            </h1>

            <div className="flex justify-center gap-8"> 
        <div className="w-full lg:w-1/5 pr-1 border border-gray-500"> 
          <h2 className="text-2xl font-semibold mb-4 text-center">Sport</h2>
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
        </div>      
    )    
}