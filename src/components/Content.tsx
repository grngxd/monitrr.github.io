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
        {/* <p className='font-light'>front end developer, game developer, amateur pianist</p> */}

        <Prescence/>
        
          <div className='md:flex flex-col hidden items-center mt-5'>
              <img src={"/programmer.svg"} alt="Programmer" className="w-56 flex h-100 drop-shadow-sm scale-100 hover:scale-125 hover:drop-shadow-lg hover:mt-5 hover:mb-5 transition-all duration-300"/>
          </div>

        <div className='md:flex flex-col block items-center mt-5'>
          <Socials/>
        </div>
    </div>
  )
}

function Prescence(){
  const lanyard = useLanyard({
		userId: "829372486780715018",
	});

  if(lanyard.isValidating){
    return (<CircularProgress className='justify-center w-full self-center scale-[0.1] text-monitrr-200 hover:text-monitrr-100 transition-all duration-300' color='inherit' variant='indeterminate'/>)
  }else if(lanyard.data?.data.activities[1]){
    if(lanyard.data?.data.active_on_discord_desktop){
      return (<span className='font-light'><span className='text-neutral-600 font-bold'>Playing: </span>{lanyard.data?.data.activities[1].name} on desktop.</span>)
    }
    else if(lanyard.data?.data.active_on_discord_desktop){
      return (<span className='font-light'><span className='text-neutral-600 font-bold'>Playing: </span>{lanyard.data?.data.activities[1].name} on mobile.</span>)
    }
    else{
      return (<span className='font-light'><span className='text-neutral-600 font-bold'>Playing: </span>{lanyard.data?.data.activities[1].name} on something</span>)
    }
  }else if(lanyard.data?.data.activities[0]){
    return (
      <div>
    <p className='font-light'>front end developer, game developer, amateur pianist</p>
    <span className='font-light text-sm'>{lanyard.data?.data.activities[0].emoji?.name} {lanyard.data?.data.activities[0].state}</span>
    </div>
    )
  }else{
    return ( <p className='font-light'>front end developer, game developer, amateur pianist</p> )
  }
}

export default Content