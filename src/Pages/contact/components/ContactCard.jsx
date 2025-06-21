import React from 'react'
import "./ContactCard.scss"

/**
 * ContactCard Component
 * Displays individual contact information cards with icons and details
 * 
 * @param {React.Component} icon - Icon component to display
 * @param {string} title - Card title
 * @param {string} color - Icon color
 * @param {Array} details - Array of detail objects with value property
 */
export default function ContactCard({icon: Icon, title, color, details}) {
  return (
    <div className='contact__card'>
        {/* Contact icon with specified color and size */}
        <Icon className='contact__card-icon' color={color} size={42}/>
        
        {/* Card title */}
        <h4 className='contact__card-title'>{title}</h4>
        
        {/* Contact details with safety check */}
        {/* IMPROVED: Added null/empty array check to prevent runtime errors */}
        <p className='contact__card-details'>
            {details && details.length > 0 ? details[0].value : 'No details available'}
        </p>
    </div>
  )
}
