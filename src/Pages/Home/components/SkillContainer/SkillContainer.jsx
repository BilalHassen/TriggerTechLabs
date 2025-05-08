import React from 'react'
import "./SkillContainer.scss"
export default function SkillContainer({title, percentage, prefixClass, progressWidth}) {
  return (
    <div className={`${prefixClass}__container`}>
        <div className={`${prefixClass}__wrapper`}>
        <h3 className={`${prefixClass}__title`}>{title}</h3>
        <p className={`${prefixClass}__percentage`}>{percentage}</p>
        </div>
    <div className={`${prefixClass}__progress-bar`}
    // css variable needs a string with a unit
    style={{ "--progress-width": `${progressWidth}%` }}
    ></div>
    </div> 
  )
}

