import React from 'react'

function Contact() {
  return (
    <div className='sm:hidden md:flex mt-10 mb-[-1rem] p-10 pt-6 md:text-center flex flex-col items-center h-[calc(30vh)]'>
        {/*eslint-disable-next-line react/jsx-no-comment-textnodes*/}
        <h1 className='mt-10 moni-gradient font-medium transition-all hover:font-bold duration-150 cursor-pointer mb-10 drop-shadow-lg shadow-white text-2xl'>// Contact</h1>
        <button className='px-10 py-2 rounded-full bg-monitrr-200 text-white hover:shadow-xl transition-all duration-300' data-tally-open="wQpD13" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="0">Contact me!</button>
    </div>
  )
}

export default Contact