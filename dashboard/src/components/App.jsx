import { useState } from 'react'
import {Link} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='flex flex-wrap w-full h-full border'>
    <Link to={"https://zerodhapsi.netlify.app/"} className='mt-7 w-full h-24 p-5'>
    <img src="logo.svg" alt="logo" className='w-1/6 h-2/3'/></Link>
    </div>
    </>
  )
}

export default App
