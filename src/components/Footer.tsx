import React from 'react'

function Footer() {
  return (
    <div className="pl-4 z-[50] w-full h-12 shadow-footer flex items-center bg-white bg-opacity-50 backdrop-blur-xl transition-al hover:shadow-footer-hover duration-300">
      <h1 className='moni-gradient font-bold transition-all hover:font-medium duration-150 cursor-pointer drop-shadow-lg shadow-white'>
        © 2022 — hello there!
      </h1>
    </div>
  )
}

export default Footer