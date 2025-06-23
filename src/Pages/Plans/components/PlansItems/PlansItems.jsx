import React from 'react'

function PlansItems({label, Icon, color}) {
  return (
    <div>{label}
    <Icon size={20} color={color}/>
    </div>
  )
}

export default PlansItems