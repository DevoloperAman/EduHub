import React from 'react'
import Project_cards from '../../../src/Components/ToolsComponents/Project_cards'
import Webdev from '../../../src/Assets/web_development.png'
import python_logo from '../../../src/assets/python.png'
import Cpp from '../../../src/assets/C++.png'
import SQL from '../../../src/assets/sql.png'
import MD from '../../../src/assets/mongoDB.png'
import JS from '../../../src/assets/javascript.png'
import Rct from '../../..//src/assets/react.png'
import Java from '../../../src/assets/java.png'

function Project() {
  return (
    <>
      {/* ------------------This is the main flex container------------------  */}
      <div className='  flex flex-col justify-center items-center   py-12   '>


        {/*  ------------------This is Text Section------------------  */}
        <div className=' text-center pt-4   r'>
          <h1 className='text-lg  md:text-3xl font-bold animate-pulse'> || Practice Projects by Technology || </h1>
          <p className='pt-1 text-sm md:w-2/3  md:text-lg mx-auto md:pt-4  '>This will help you apply what you’ve learned in real-world scenarios. Whether you've just started with HTML, CSS, and JavaScript or you're diving deeper into Python,Java ,C, C++ .   Here you'll find beginner-friendly mini projects, practical exercises, and coding challenges to boost your skills and confidence.</p>
        </div>




        {/*  ------------------this is the imported  cards------------------ */}
        <div className='grid grid-cols-2 gap-8 p-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 md:p-4   pt-12  '>

          {/*  this is Java Project Card */}
          <Project_cards
            name="Java"
            discription="Start Small, Think Big – Java Way"
            iconImg={Java}
            iconImgAnimation="animate-bounce"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1F-tCyjpD3x42H9PuIbGB1zo71RHsxu3s?usp=sharing"
          />

          {/*  this is web-development Project Card */}
          <Project_cards
            name="Web-Dev."
            discription="Start Small, Think Big – Java Way"
            iconImg={Webdev}
            iconImgAnimation="animate-bounce"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1HifWqzzcZbyGMaefvXQjKj6Czb2qvURR?usp=sharing"
          />

          {/*  this is Python Project Card */}
          <Project_cards
            name=" Python"
            discription="Start Small, Think Big – Java Way"
            iconImg={python_logo}
            iconImgAnimation="animate-pulse"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1jjXbHARSxaTAdv4l8pyO77fShiNHPAUU?usp=sharing"
          />

          {/*  this is C++ Project Card */}
          <Project_cards
            name="C++"
            discription="Start Small, Think Big – Java Way"
            iconImg={Cpp}
            iconImgAnimation="animate-spin"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1YwxthNfGkpX5jN2gLmGz3n713oIO_4VT?usp=sharing"
          />


            {/*  this is React Project Card */}
          <Project_cards
            name="React"
            discription="Start Small, Think Big – Java Way"
            iconImg={Rct}
            iconImgAnimation="animate-spin"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1JLk1ZUJuBfBDWbDMir1migW2I3sWTr3u?usp=sharing"
          />

          {/*  this is SQL Project Card */}
          <Project_cards
            name="SQL"
            discription="Start Small, Think Big – Java Way"
            iconImg={SQL}
            iconImgAnimation="animate-bounce"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link = "https://drive.google.com/drive/folders/1Y4BYeAU0fr1FAnTUZg5nVRnbsnHJdl1D?usp=sharing"
          />

          {/*  this is MongoDB Project Card */}
          <Project_cards
            name="MongoDB"
            discription="Start Small, Think Big – Java Way"
            iconImg={MD}
            iconImgAnimation="animate-bounce"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/19n4pIuJPj9kpnCTv1_xXjlZ-MGie4pyC?usp=sharing"
          />

          {/*  this is Java Script Project Card */}
          <Project_cards
            name="JavaScript"
            discription="Start Small, Think Big – Java Way"
            iconImg={JS}
            iconImgAnimation="animate-bounce"
            buttonStyle={'bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-900 transition duration-300'}
            link="https://drive.google.com/drive/folders/1wWLArmP86Te2EPznhYk2QaJt8CizZEzI?usp=sharing"
          />

         

        </div>
      </div>
    </>
  )
}

export default Project