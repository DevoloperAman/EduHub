
function Project_cards({ name, discription, iconClass, iconStyle, buttonStyle, iconImg,iconImgAnimation,link }) {
  return (
    <>

      {/* 
        ## name: Title or heading of the card (e.g., technology name like "Java", "Python", etc.)

        ## discription: A short tagline or message shown under the title to describe the card.

        ## iconClass: Font Awesome class name used to display an icon (used if no image is provided).

        ## iconStyle: Tailwind CSS classes to style the icon (e.g., size, color).

        ## buttonStyle: Tailwind CSS classes to customize the appearance of the button.

        ## iconImg: Optional image (usually imported) to use instead of Font Awesome icons. If provided, it overrides the iconClass.
        
        ## iconImgAnimation: Optional Tailwind CSS classes for animation effects on the image (e.g., bounce, shake).
        */}



      <div className=' h-72 w-36 flex flex-col justify-center items-center md:h-64  md:w-48   rounded-xl shadow-xl'>



        {/*  this is for the icon and the iamge  in the card  */}
        {iconImg ?
          (<img src={iconImg} alt={name + " icon"} className={`w-12 h-12 mb-2 ${iconImgAnimation}`} />)
          :
          (<i className={`${iconClass} ${iconStyle}`}></i>)}


        {/*  this is for the  title  in the card  */}
        <h1 className='text-2xl font-semibold text-center '>{name}</h1>

        {/*  this  is for the  discription in the card  */}
        <h2 className=' py-3 text-center w-2/3  '> {discription} </h2>

        {/*  this is for the button in the card  */}

        <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={`${buttonStyle}`}>
          Click Here
           
        </button>
        </a>

      </div>
    </>
  )
}

export default Project_cards