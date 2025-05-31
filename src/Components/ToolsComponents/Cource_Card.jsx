import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cource_Card({ name, discription, route }) {
  const navigate = useNavigate();
  return (
    <>
      <div className='   flex flex-col justify-center items-center md:h-64  md:w-52 rounded-xl shadow-xl  bg-white hover:shadow-2xl hover:shadow-blue-500 transition-all duration-300 ease-in-out p-4  '>




        <i className="fa-solid fa-desktop text-3xl text-blue-500"></i>
        <h1 className='text-xl font-semibold '>{name}</h1>
        <h2 className=' py-3 text-center  '> {discription} </h2>
        <button
          className="bg-blue-500 px-4 py-2 mt-3 text-white rounded-lg hover:bg-blue-900 hover:text-white hover:font-bold transition-all duration-300 ease-in-out"
          onClick={() => navigate(route)}

        >
          Click Here
        </button>

      </div>
    </>
  )
}

export default Cource_Card 