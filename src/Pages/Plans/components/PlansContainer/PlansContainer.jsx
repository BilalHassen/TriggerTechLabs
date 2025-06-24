import React from 'react'
import "./PlansContainer.scss"
import plansData from "./plansData"
import PlansCard from '../PlansCard/PlansCard'

/**
 * PlansContainer Component
 * 
 * Container component that renders all pricing plan cards.
 * Maps through plansData to create individual PlansCard components.
 * 
 * Features:
 * - Responsive grid layout for plan cards
 * - Passes plan data to individual PlansCard components
 * - Handles the overall layout and spacing of pricing cards
 */
function PlansContainer() {
  return (
    <div className='plans__card-wrapper'>{plansData.map((plan)=>{
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