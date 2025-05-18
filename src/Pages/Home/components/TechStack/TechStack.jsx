import React from 'react';
import techData from '../../../../data/techStack';
import './TechStack.scss';
import TechStackCard from '../TechStackCard/TechStackCard';

function TechStack() {
  return (
    <section className="tech-stack-section">
        <div className='tech-stack__divider'>
      <h2 className="tech-stack__title">Tech Stack</h2>
      <div className='tech-stack__colour-bar'></div>
      </div>
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
  );
}

export default TechStack;
