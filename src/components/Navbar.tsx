import React from 'react'

function Navbar() {
  return (
    <div className="pl-4 fixed z-[50] w-full h-12 shadow-lg flex  items-center bg-white bg-opacity-50 backdrop-blur-xl hover:shadow-navbar-hover transition-all duration-300">
      <h1 className='moni-gradient font-bold transition-all hover:font-medium duration-150 cursor-pointer drop-shadow-lg shadow-white'>monitrr</h1>
    </div>
  )
}

export default Navbar