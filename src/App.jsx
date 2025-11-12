import React from 'react'
import Navbar from './components/Navbar'
import { useStateContext } from './context'

const App = () => {
  const {weather} = useStateContext()
  console.log(weather)
  return (
    <div className='w-full h-screen text-black px-2 py-2'>
      <Navbar/>
    </div>
  )
}

export default App
