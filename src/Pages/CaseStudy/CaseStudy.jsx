import React from 'react'
import { Link } from 'react-router-dom'
import "./CaseStudy.scss"
function CaseStudy() {
  return (
    <div className='case-study'>
        <p className='coming-soon'>Coming Soon 🚀</p>
        <Link to="/">
        <button className='back-button'>Back to Home</button>
        </Link>
        </div>
  )
}

export default CaseStudy