import React from 'react'
import Socials from './Socials'
import { useLanyard } from "react-use-lanyard";
import { CircularProgress } from '@mui/material';

function Content() {
  return (
    <div className='p-10 pt-[calc(50vh-10rem)] md:text-center text-left flex flex-col self-center align-middle h-[calc(100vh+2rem)]'>
        <h1 className='font-bold text-2xl moni-gradient'>
          monitrr
        </h1>
        <p className='font-light'>front end developer, game developer, amateur pianist</p>
        
          <div className='md:flex flex-col hidden items-center mt-5'>
              <img src={"/programmer.svg"} alt="Programmer" className="w-56 flex h-100 drop-shadow-sm scale-100 hover:scale-125 hover:drop-shadow-lg hover:mt-5 hover:mb-5 transition-all duration-300"/>
          </div>

        <div className='md:flex flex-col block items-center mt-5'>
          <Socials/>
        </div>
    </div>
  )
}

export default Content