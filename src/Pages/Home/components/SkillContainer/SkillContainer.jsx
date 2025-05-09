import React from 'react'
import "./SkillContainer.scss"
export default function SkillContainer({title, percentage, prefixClass, progressWidth, color}) {
  return (
    <div className={`${prefixClass}__container`}>
        <div className={`${prefixClass}__wrapper`}>
        <p className={`${prefixClass}__title`}>{title}</p>
        <p className={`${prefixClass}__percentage`}>{percentage}</p>
        </div>
        <div className={`${prefixClass}__progress-track`}>
  <div
    className={`${prefixClass}__progress-bar ${color}`}
    style={{ "--progress-width": `${progressWidth}%` }}
  ></div>
</div>
    </div> 
  )
}

