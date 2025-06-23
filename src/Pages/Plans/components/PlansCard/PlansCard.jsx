import React from 'react'
import "./PlansCard.scss"
import Card from "../../../../components/Card/Card"
import PlansItems from "../PlansItems/PlansItems"
function PlansCard({title, price, color, included, fit}) {
    console.log(included)
  return (
    
    <Card className={"plans__card"} color={color}>
        <div className='plans__card-container'>
            <h2 className="plans__card-title">{title}</h2>
            <h3 className="plans__card-price">{price}</h3>
            {included.map((item, index) => (
                <PlansItems key={index} label={item.label} Icon={item.icon} color={color}/>
            ))}
        </div>
    </Card>
  
    
  )
}

export default PlansCard