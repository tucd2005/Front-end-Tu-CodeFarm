import React from 'react'

const Page = () => {
  return (
    <>
    <div className="bg-gray-100 font-sans">

        <header className=" bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">FASCO</div>
        <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Deals</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Packages</a>
        </nav>
        <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign Up</button>
        </div>
    </header>
    </div>
    </>
  )
}

export default Page