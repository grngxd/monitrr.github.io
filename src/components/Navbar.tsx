import React from 'react'

function Navbar() {
  return (
    <div className="pl-4 fixed z-[50] w-full h-12 shadow-lg flex gap-2 items-center bg-white bg-opacity-50 backdrop-blur-xl hover:shadow-navbar-hover transition-all duration-300">
      <img src={"pfp.png"} alt="Profile" className="bg-monitrr-100 hover:bg-opacity-[0.50] bg-opacity-[0.50] rounded-full w-8 hover:bg-monitrr-200 duration-500 ease-in-out"/> <h1 className='moni-gradient font-bold transition-all hover:font-medium duration-150 cursor-pointer drop-shadow-lg shadow-white'>monitrr</h1>
    </div>
  )
}

export default Navbar