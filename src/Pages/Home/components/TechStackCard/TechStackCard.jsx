import React from 'react'
import "./TechStackCard.scss"
function TechStackCard({techItem, name}) {
  return (
    <div className='tech-stack__card'>
    <svg className='tech-stack__icon'
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill={`#${techItem.icon.hex}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={techItem.icon.path} />
    </svg> 
    <p className='tech-stack__name'>{name}</p>
    </div>
   )
  
}

export default TechStackCard