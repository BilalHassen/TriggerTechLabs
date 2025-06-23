import React from 'react'
import "./PlansContainer.scss"
import plansData from "./plansData"
import PlansCard from '../PlansCard/PlansCard'
function PlansContainer() {



  return (
    <div>{plansData.map((plan)=>{
      console.log(plan.id)
      return (
        <PlansCard
        key={plan.id}
        title={plan.title}
        price={plan.price}
        color={plan.color}
        included={plan.included}
        fit={plan.fit}
        />
      )
      
    })}</div>
  )
}

export default PlansContainer