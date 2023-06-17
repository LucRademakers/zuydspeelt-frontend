// @client-component
import Image from 'next/image'
import Dropdown from "./dropdown/page"
import Searchbar from "./components/searchbar";

export default function Home() {
  return (
    <main>
      <div>
        {<Searchbar />}
      </div>

      <div style={{ position: 'absolute', top: '0', right: '0', width: '100px' }}>      
       <Dropdown/>
      </div>       
    </main>
  )
}
