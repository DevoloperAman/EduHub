import React from 'react'

const Button = ({name , link, className = '' }) => {
  return (
    <div>
       <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={` text-black  font-bold    rounded-xl cursor-pointer ${className}`}>
        {name}
      </button>
      </a>
    </div>
  )
}

export default Button