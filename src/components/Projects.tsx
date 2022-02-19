import React from 'react'
import Project from "./ProjectsProject"

function Projects() {
  return (
    <div className='md:flex hidden'>
      <div className='mt-10 mb-[-1rem] p-10 pt-6 md:text-center text-left flex flex-col items-center h-[calc(100vh-48px)]'>
          {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
          <h1 className='mt-10 moni-gradient font-medium transition-all hover:font-bold duration-150 cursor-pointer mb-10 drop-shadow-lg shadow-white text-2xl'>// Projects</h1>
          <div className='grid grid-cols-3 gap-8'>
            <Project name='Socialo' src='./projects/Socialo.png' href='https://github.com/code123841/Socialo'/>
            <Project name='Wizzer Todo' src='./projects/Todo.png' href='https://wizzer-todo.netlify.app/'/>
            <Project name='moni.is-a.dev' src='./projects/Portfolio.png' href='/'/>
          </div>
      </div>
    </div>
  )
}

export default Projects