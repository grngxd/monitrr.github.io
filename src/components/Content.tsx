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
    return <div className='w-full flex items-center justify-center'><CircularProgress className='text-monitrr-200 hover:text-monitrr-100 transition-all duration-300' color='inherit' variant='indeterminate'/></div>;
  }else{
    if(typeof lanyard.data?.data.activities !== 'undefined'){
    for(var i in lanyard.data?.data.activities){
      if(lanyard.data?.data.activities[i].type === 4){
        return (<div>
          <p className='font-light'>front end developer, game developer, amateur pianist</p>
        <p className='font-light text-neutral-600 text-sm'>{lanyard.data?.data.activities[i].emoji?.name} {lanyard.data?.data.activities[i].state}</p>
        </div>)
      }else{
        return (<div>
          <p className='font-light'>front end developer, game developer, amateur pianist</p>
        <p className='font-light text-neutral-600 text-sm'><span className='font-bold text-sm'>PLAYING: </span>{lanyard.data?.data.activities[i].name}</p>
        </div>)
      }
    }
    }else{
      return <p className='font-light'>front end developer, game developer, amateur pianist</p>
    }
  }

  return <p className='font-light'>front end developer, game developer, amateur pianist</p>;
}

export default Content