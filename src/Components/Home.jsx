import Button from './ToolsComponents/Button'

function Home() {
  return (
    <>
      <div className=' flex flex-col mt-12 items-center md:flex-row w-full md:mt-20 h-auto     '>

        {/* this is for the Text Section   */}
        <div className='  px-2  md:w-2/3 md:flex flex-col justify-center md:px-16    '>

          <h1 className=' w-full text-2xl  font-bold  md:text-5xl md:font-semibold   leading-normal   ' >Your One-Stop Hub for all the IT & Engineering  Study Meterials</h1>

          <h3 className=' w-full  md:w-full   md:text-xl md:max-w-2/3 mt-6  ml-1 '>A complete digital library for IT & Engineering students.  Explore curated  resources for  B.Tech, B.Sc, BCA, MCA, M.Sc, and more <br /> —  designed to simplify your study.

          </h3>

          {/* Selected Ccource  */}
          <div className='  flex gap-4 mt-6  md:flex md:gap-5   md:mt-8   items-center'>
            <input className=' px-3 border bg-zinc-100 rounded-xl md:px-12 py-3   ' type="search" placeholder='Select Your cource' />

            <Button className= ' px-3 py-3 text-sm  bg-blue-500 text-white md:py-3 md:px-5' name="Get Started" link={undefined} />
          </div>

        </div>

        {/*  this  is for the Image Section   */}
        <div className=' w-3/4 md:w-1/3  flex justify-center  items-center   '>
          <img className='w-full mt-6 md:mt-0 ' src="src\assets\boyimage.png" alt="boi Iamge " />
        </div>
      </div>
    </>
  )
}

export default Home

 