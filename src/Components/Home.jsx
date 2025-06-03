import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ToolsComponents/Button'
import boy from '.././assets/boyimage.png'

function Home() {
  const navigate = useNavigate()
  const [selectedCourse, setSelectedCourse] = useState('')

  // Course options with name and route
  const courses = [
    { name: "Select Your Course", route: "" },
    { name: "B.Sc. IT", route: "/bsc-it" },
    { name: "B.Sc. CS", route: "/bsc-cs" },
    { name: "BCA", route: "/bca" },
    { name: "B.Tech CSE", route: "/betech" },
    { name: "M.Sc. IT", route: "/msc-it" },
    { name: "M.Sc. CS", route: "/msc-cs" },
    { name: "MCA", route: "/mca" },
    { name: "M.Tech CSE", route: "/mtech" },
  ]

  // Handle dropdown change
  const handleChange = (e) => {
    const selectedRoute = e.target.value
    setSelectedCourse(selectedRoute)
  }

  // Redirect when user clicks Get Started button
  const handleGetStarted = () => {
    if (selectedCourse) {
      navigate(selectedCourse)
    } else {
      alert('Please select a course first')
    }
  }

  return (
    <>
      <div className='flex flex-col mt-12 items-center md:flex-row w-full md:mt-20 h-auto'>

        {/* Text Section */}
        <div className='px-2 md:w-2/3 md:flex flex-col justify-center md:px-16'>

          <h1 className='w-full text-2xl font-bold md:text-5xl md:font-semibold leading-normal'>
            Your One-Stop Hub for all the IT & Engineering Study Materials
          </h1>

          <h3 className='w-full md:w-full md:text-xl md:max-w-2/3 mt-6 ml-1'>
            A complete digital library for IT & Engineering students. Explore curated resources for B.Tech, B.Sc, BCA, MCA, M.Sc, and more <br />
            — designed to simplify your study.
          </h3>

          {/* Dropdown + Button */}
          <div className='flex gap-8 mt-6 md:flex md:gap-5 md:mt-8 items-center'>
            <select
              className='px-4  py-3 border bg-zinc-100 rounded-xl md:px-12'
              value={selectedCourse}
              onChange={handleChange}
            >
              {courses.map(course => (
                <option key={course.route} value={course.route}>
                  {course.name}
                </option>
              ))}
            </select>

            <button
              className='px-3 py-3 text-sm bg-blue-500 text-white md:py-3 md:px-5 rounded'
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-3/4 md:w-1/3 flex justify-center items-center'>
          <img className='w-full mt-6 md:mt-0' src={boy} alt="boy image" />
        </div>
      </div>
    </>
  )
}

export default Home
