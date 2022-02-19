import React from 'react'

function NotFound() {
  return (
        <div
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-monitrr-200
        to-monitrr-100
      "
    >
      <div className="px-40 py-20 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-monitrr-100 text-9xl hover:drop-shadow-xl hover:text-monitrr-200 transition-all duration-300">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="moni-gradient-reverse">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <a
            href="/"
            className="px-6 py-2 text-sm font-semibold text-white bg-monitrr-100 hover:bg-monitrr-200 rounded-lg hover:shadow-lg transition-all duration-300"
            >Go home</a>
        </div>
      </div>
    </div>
  )
}

export default NotFound;