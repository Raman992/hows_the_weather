import React, { useState } from 'react'

const Navbar = () => {

    const [input, setInput] = useState('')

    const onChange = (e) =>{
        setInput(e.target.value)
    }

    const onKeyUp = (e) =>{
        
    }

  return (
<nav className="w-full p-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-gray-200/50 ">
    <img src="icons/icon.png" alt="logo" className='w-9' />
    <h1 className='font-bold tracking-wide text-3xl px-1'>How's the weather</h1>
    <div className='w-60 overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <i className="fa-solid fa-magnifying-glass "></i>
        <input type="text" placeholder='Search' onKeyUp={onKeyUp} className='focus:outline-0 w-full text-[#212121] text-lg' value={input} onChange={onChange}/>
    </div>
</nav>

  )
}

export default Navbar
