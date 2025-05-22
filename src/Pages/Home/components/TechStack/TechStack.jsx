import React from 'react';
import techData from '../../../../data/techStack';
import './TechStack.scss';
import TechStackCard from '../TechStackCard/TechStackCard';
import ColorBar from '../../../../components/ColorBar/ColorBar';

function TechStack() {
  return (
    <>
    <div className='tech-stack__divider'>
    <h2 className="tech-stack__title">Tech Stack</h2>
    {/* <div className='tech-stack__colour-bar'></div> */}
    <ColorBar/>
    </div>
    <section className="tech-stack-section">
       
      <div className="tech-stack">
        {techData.map((techItem) => (
          <TechStackCard
            key={techItem.id}
            name={techItem.name}
            techItem={techItem}
          />
        ))}
      </div>
    </section>
    </>
  );
}

export default TechStack;
