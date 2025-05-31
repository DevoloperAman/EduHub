import React, { useState } from 'react'

function BScIT() {
  const [search, setSearch] = useState("")

  const Subject = [
   { name: "Java", link: "https://drive.google.com/drive/folders/1oEI2aHZY6c7jaNgLexw0nCrqbMt3q2NS?usp=sharing" },
    { name: "Python", link: "https://drive.google.com/drive/folders/1BJQmk_SbKHV2IBpzx6pd_7YOISRu3Xom?usp=sharing" },
    { name: "Data Structures", link: "https://drive.google.com/drive/folders/1Br4kIHYk0TYJDIgvAIAB25WEPeDt6-iK?usp=sharing" },
    { name: "Networking", link: "https://drive.google.com/drive/folders/1Wb-6vZ0-cxpp5mGgPrXjIzJfzCwHPxJJ?usp=sharing" },
    { name: "DBMS", link: "https://drive.google.com/drive/folders/1brSq-fNblRGR2SLoLy9UTX4rkzYnuiEw?usp=sharing" },
    { name: "Web Development", link: "https://drive.google.com/drive/folders/1SEy8niQYfO91hiszAHwD1C62p7N0_KLk?usp=sharing" },
    { name: "Cloud Computing", link: "https://drive.google.com/drive/folders/1f5OVctRap6JQkn7SElg59D6O0p7R2g9n?usp=sharing" },
    { name: "AI", link: "https://drive.google.com/drive/folders/1GbXs08LM6aN9hYY6P2l_fBdP2r1V-SQO?usp=sharing" },
    { name: "Machine Learning", link: "https://drive.google.com/drive/folders/1Fg1v-_uwc2t97dKOUzJiotfoHi2z1y-u?usp=sharing" },
    { name: "RDBMS", link: "https://drive.google.com/drive/folders/1y-iHB1BxJNj4rWhRGCtf9eEplKIGJtMY?usp=sharing" },
    { name: "Blockchain", link: "https://drive.google.com/drive/folders/1NlWCebKL6MbpKwducRjeqMh4zq6snWPK?usp=sharing" },
    { name: "Linux", link: "https://drive.google.com/drive/folders/1_TvBY3AYjPfLoCGZps0T_THI5_AAriO6?usp=sharing" },
    { name: "React", link: "https://drive.google.com/drive/folders/19XtTc6BGmCLXP66rMmcurxSvY18HQaUS?usp=sharing" },
    { name: "Node.js", link: "https://drive.google.com/drive/folders/1Utmm-Ff62h2mSP-9D1XkZ85h0pIT_iq3?usp=sharing" },
    { name: "PHP", link: "https://drive.google.com/drive/folders/1ch5Vk6_DxGQKEuvf2_emE9zR99PkwHx6?usp=sharing" },
    { name: "C++", link: "https://drive.google.com/drive/folders/1We6LvfhTuUY_30aNdvsvEzdM70NXjU3i?usp=sharing" },
    { name: "R Language", link: "https://drive.google.com/drive/folders/1TW4PBzuCYZIrE1JPUkVH7f8yi9lnTgOK?usp=sharing" },
    { name: "Software Engineering", link: "https://drive.google.com/drive/folders/1fjl72zVZBnwcXJAgXZpjUIgQuVSWdTEz?usp=sharing" },
    { name: "Digital electronic", link:"https://drive.google.com/drive/folders/1f_EQZi1_Gh50Bc8bY4nVu3743Cm8CVUp?usp=sharing"}
  ];

  const filteredSubjects = Subject.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>

      <div className='px-10 py-10'>

        {/* Header Section */}
        <div className='flex justify-center gap-22 items-center '>
          <div className='h-52 w-46  flex items-center justify-center'>
            <img className='h-52 w-46 overflow-hidden rounded-2xl ' src="src\assets\Cources pages images\Bscit.jpg" alt="laoding..." />
          </div>
          <div>
            <h1 className='text-5xl font-bold pb-1.5'>MCA
              <span className='text-3xl'>  (Computer Application )</span> </h1>
            <p>
              Professional program focused on software development and application design. <br />
              Build enterprise-level solutions and strong backend logic with advanced tools.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className='pt-16 pb-8 flex justify-center items-center gap-6  '>
          <input
            type="text"
            placeholder='Search your Subject...'
            className='border text-lg px-6 py-3 w-4/5 rounded-2xl'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa-brands fa-searchengin  fa-shake text-5xl  text-blue-500"></i>
        </div>

        {/* Subject Grid with Scroll */}
        <div className=' h-42 overflow-y-scroll  p-4   '>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center'>

            {filteredSubjects.length > 0 ?
              (filteredSubjects.map((Subject, index) => (
                <a
                  href={Subject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={index}
                  className='border-1 shadow-xl w-28 h-14 rounded-md  px-2 flex justify-center items-center text-center  font-semibold 
                  hover:bg-blue-500
                  hover:text-white 
                  hover:font-bold transition-all duration-500 ease-in-out '
                > {Subject.name}
                </a>
              ))) :
              (<p className='col-span-full text-center text-gray-500'>No subjects found.</p>

              )}
          </div>
        </div>
      </div>



    </>
  )
}

export default BScIT