import React from 'react'
import "./ContactCard.scss"
export default function ContactCard({icon: Icon,title,color,details}) {
  return (
    <div className='contact__card'>
        <Icon className='contact__card-icon' color={color} size={42}/>
        <h4 className='contact__card-title'>{title}</h4>
        <p className='contact__card-details'> {details[0].value}</p>
    </div>
  )
}
