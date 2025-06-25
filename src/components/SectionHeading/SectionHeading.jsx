import React from 'react'
import "./SectionHeading.scss"
import ColorBar from '@components/ColorBar/ColorBar'
function SectionHeading({prefixClass, TitleText}) {
  return (
    // prefix class in case styling needs to be changed from default
    <div className={`${prefixClass}__divider divider`}>
        <h2 className={`${prefixClass}__title title`}>{TitleText}</h2>
        <ColorBar />
      </div>
  )
}

export default SectionHeading