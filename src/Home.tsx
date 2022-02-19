import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function Home() {
  return (
      <div>
        <Navbar/>
        <Content/>
        <Projects/>
        <Footer/>
      </div>
  )
}

export default Home