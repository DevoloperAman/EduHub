import React from 'react'
import founder from '../../../src/assets/Founder.png'

function About() {
  return (

    <>
      <div className=' flex  flex-col  justify-center items-center  gap-4 md:flex md:flex-row  md:justify-center md:items-center pt-12 md:gap-12  '>
        {/*  this is image Section */}
        <div className='md:w-1/2 '>
          <img className='shadow-blue-500 shadow-2xl rounded-full p-' src={founder} alt="owner image" />
           
        </div>

        {/*  this is the text Section  */}
        <div className=' text-center  p-3 md:text-start  md:w-1/2  md:p-0'>
          <h1 className=' text-2xl font-bold md:text-3xl md:font-semibold'>Founder : <span>Aman Gupta </span></h1>
          <p className='font-bold text-2xl pt-4'> "Our Mission" </p>
          <p className='pt-1 text-lg'>At EDU Hub, we’re on a mission to make programming 💻 and study 📚 super easy and fun for everyone. <br />
          <span className='font-bold'>Whether you're </span>
             preparing for your college exams, learning to code, exploring new skills 🧠, building your  <span className='font-semibold'>resume 📝,</span>  improving <span className='font-semibold'>soft skills 💬,</span>   preparing for  <span className='font-semibold'> interviews 💼,</span>  or getting your  <span className='font-semibold'>dream job 🧑‍💻</span>  — we’ve got you covered everythings ! 🎯</p>


        </div>
      </div>
    </>

  )
}

export default About