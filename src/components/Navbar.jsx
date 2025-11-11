import React, { useState } from 'react'

const Navbar = () => {

    const [input, setInput] = useState('')

    const onChange = (e) =>{
        setInput(e.target.value)
    }

    const onKeyUp = (e) =>{
        
    }

  return (
<nav className="w-full py-3 flex justify-between items-center bg-amber-300">
    <h1 className='font-bold tracking-wide text-3xl px-1'>How's the weather</h1>
    <div className='w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
        <i className="fa-solid fa-magnifying-glass "></i>
        <input type="text" placeholder='Search' onKeyUp={onKeyUp} className='focus:outline-0 w-full text-[#212121] text-lg' value={input} onChange={onChange}/>
    </div>
</nav>
  )
}

export default Navbar
