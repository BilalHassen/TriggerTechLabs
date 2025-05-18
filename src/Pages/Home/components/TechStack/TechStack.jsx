import React from 'react';
import techData from '../../../../data/techStack';
import './TechStack.scss';
import TechStackCard from '../TechStackCard/TechStackCard';

function TechStack() {
 

  return (
    <>
    <h2 className='tech-stack__title'>Tech Stack</h2>
    <section className="tech-stack">
     
      {techData.map((techItem)=>
        <TechStackCard
        key={techItem.id}
        name={techItem.name}
        techItem={techItem}// object for each icon
        />
      )}
    </section>
    </>
  );
}

export default TechStack;


