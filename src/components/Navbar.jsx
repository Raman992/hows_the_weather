import React, { useState } from 'react'
import { useStateContext } from '../context'

const Navbar = () => {
  const [input, setInput] = useState('')
  const { setPlace } = useStateContext()

  const onChange = (e) => setInput(e.target.value)

  const onKeyUp = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setPlace(input)
      setInput('')
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/30">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <img src="/icons/icon.png" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="font-bold text-2xl sm:text-3xl tracking-wide text-white drop-shadow-md">
            How's the Weather
          </h1>
        </div>
        <div className="mt-3 sm:mt-0 w-full sm:w-64 flex items-center gap-2 bg-white/30 rounded-xl shadow-lg px-3 py-2">
          <i className="fa-solid fa-magnifying-glass text-white/90"></i>
          <input
            type="text"
            placeholder="Search city..."
            onKeyUp={onKeyUp}
            value={input}
            onChange={onChange}
            className="w-full bg-transparent placeholder-white/70 text-white text-base focus:outline-none"
          />
        </div>
      </div>
    </nav>

  )
}

export default Navbar
