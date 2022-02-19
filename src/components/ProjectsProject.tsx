import React from 'react'

function Project(props : {name : string, src : string, href : string}) {
const { name, src, href } = props;
  return (
    <div className='bg-white p-4 rounded-[8px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-300'>
        <span className='font-bold'>{name}</span>
        <a href={href}><img src={src} alt={name} className="rounded-[8px] mt-3 p-auto shadow-lg hover:shadow-xl transition-all duration-300"/></a>
    </div>
  )
}

export default Project