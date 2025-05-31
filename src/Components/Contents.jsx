import Cource_Card from './ToolsComponents/Cource_Card'

function Contents() {
  return (
    <>

    <h1 className='text-center text-4xl font-bold   pt-28  pb-4 flex-wrap'> || One platform  <span className='  pt-5 md:pt-0'>Every Solution ||</span>  </h1>

    <div className='  gap-8 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2  justify-items-center md:px-16 md:py-6 md:gap-x-6 md:gap-y-10 max-w-7xl mx-auto   '>

      <Cource_Card
        name="B.Sc. IT"
        discription="Crafting the Architects of Technology"
        route="/bsc-it" 
      />


      <Cource_Card
        name="B.Sc. CS"
        discription="Where Logic Meets Innovation"
        route="/bsc-cs"
      />

      <Cource_Card
        name="BCA"
        discription="Building Tomorrows Tech Leaders"
        route="/bca"
      />

      <Cource_Card
        name="B.Tech CSE"
        discription="Engineering the Future of Code"
        route="/betech"
      />

      <Cource_Card
        name="M.Sc. IT"
        discription="Mastering Technology, Transforming Futures"
        route="/msc-it"
      />

      <Cource_Card
        name="M.Sc. CS"
        discription="Decode, Innovate, learn, Lead"
        route="/msc-cs"
      />

      <Cource_Card
        name="MCA"
        discription="From Concepts to Creations"
        route="/mca"
      />

      <Cource_Card
        name="M.Tech CSE"
        discription="Engineering Excellence in Computing"
        route="/mtech"
      />


    </div>
  </>
  )
}

export default Contents