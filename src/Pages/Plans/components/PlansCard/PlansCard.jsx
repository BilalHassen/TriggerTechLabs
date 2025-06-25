import React from 'react';
import PropTypes from 'prop-types';
import "./PlansCard.scss";
import Card from "@components/Card/Card";
import PlansItems from "../PlansItems/PlansItems";


function PlansCard({ title, price, color, included, fit }) {
  return (
    <Card className="plans__card" color={color}>
      <div className='plans__card-container'>
        {/* Header Section - Title and Price */}
        <div className='plans__card-text-wrapper'>
          <h2 className="plans__card-title">{title}</h2>
          <h3 className="plans__card-price">{price}</h3>
        </div>
        
        {/* Features List Section */}
        <div className='plans__card-items-wrapper'>
          {included.map((item, index) => (
            <PlansItems 
              key={index} 
              label={item.label} 
              Icon={item.icon} 
              color={color} 
              index={index} 
              length={included.length - 1}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}



export default PlansCard;