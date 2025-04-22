import React from 'react'
import Nav from "../components/Nav/Nav"
import "./LayOut.scss"

function LayOut({children}) {
  return (
    <div className='layout'>
        <Nav/>
        <main className='main-content'>{children}</main>
    </div>
  )
}

export default LayOut