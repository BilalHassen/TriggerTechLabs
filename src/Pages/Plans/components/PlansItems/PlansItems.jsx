import React from 'react'
import "./PlansItems.scss"
function PlansItems({index, label, Icon, color, length}) {
  // Determine if this is the last item for special styling
  const isLastItem = index === length;
  
  return (
    <div className={`plans__card-item ${isLastItem ? "last" : ""}`}>
    <Icon size={20} color={color}/>
    <p className='plans__card-item-label'>{label}</p>
    </div>
  )
}

export default PlansItems