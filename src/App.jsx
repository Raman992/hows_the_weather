import React from 'react'
import Navbar from './components/Navbar'
import { useStateContext } from './context'
import BackgroundLayout from './components/BackgroundLayout'

const App = () => {
  const {weather} = useStateContext()
  console.log(weather)
  return (
    
    <div className='w-full h-screen text-black'>
      <Navbar/>
      <BackgroundLayout/>
    </div>
  )
}

export default App
