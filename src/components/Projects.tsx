import React from 'react'
import Project from "./ProjectsProject"

function Projects() {
  return (
    <div className='md:flex hidden'>
      <div className='mt-10 mb-[-1rem] p-10 pt-6 md:text-center flex flex-col items-center h-auto'>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <h1 className='mt-10 moni-gradient font-medium transition-all hover:font-bold duration-150 cursor-pointer mb-10 drop-shadow-lg shadow-white text-2xl'>// Projects</h1>
          <div className='grid grid-cols-3 gap-8'>
            <Project name='Portfolio' src='./projects/Portfolio.png' href='/'/>
            <Project name='cross.place' src='./projects/Crossplace.png' href='https://cross.place'/>
            <Project name='Socialo' src='./projects/Socialo.png' href='https://github.com/monitrr/Socialo'/>
            <Project name='Wizzer Todo' src='./projects/Todo.png' href='https://wizzer-todo.netlify.app/'/>
            <Project name='Easy UI' src='./projects/EasyUiDev.png' href='https://www.easyui.dev/'/>
          </div>
      </div>
    </div>
  )
}

export default Projects