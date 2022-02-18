import React from 'react'
import { BsGithub, BsController, BsBezier2, BsAt, BsBrush } from 'react-icons/bs';

function Socials() {
  return (
    <div className="flex gap-4">
        <a href="https://github.com/monitrr">
        <BsGithub className=" w-[2.5rem] h-[2.5rem] text-monitrr-200 transition-all hover:text-monitrr-100 duration-300 cursor-pointer"/>
        </a>

        <a href="https://zealstudios.itch.io/">
        <BsController className=" w-[2.5rem] h-[2.5rem] text-monitrr-200 transition-all hover:text-monitrr-100 duration-300 cursor-pointer"/>
        </a>

        <a href="https://www.figma.com/@sad">
        <BsBezier2 className=" w-[2.5rem] h-[2.5rem] text-monitrr-200 transition-all hover:text-monitrr-100 duration-300 cursor-pointer"/>
        </a>

        <a href="mailto:monitrrlmao@gmail.com">
        <BsAt className=" w-[2.5rem] h-[2.5rem] text-monitrr-200 transition-all hover:text-monitrr-100 duration-300 cursor-pointer"/>
        </a>

        <a href="https://www.deviantart.com/monitrr">
        <BsBrush className=" w-[2.5rem] h-[2.5rem] text-monitrr-200 transition-all hover:text-monitrr-100 duration-300 cursor-pointer"/>
        </a>
    </div>
  )
}

export default Socials