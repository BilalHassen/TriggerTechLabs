import React from 'react'
import "./MainSection.scss"
import Card from '../../../../components/Card/Card'
import IconsContainer from '@components/IconsContainer/IconsContainer'
import Typed from "typed.js"
import  { useEffect, useRef } from 'react';



function MainSection() {

  const animatedTextEl = useRef(null); // Reference to the DOM element
  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const options = {
      strings: ["Full-stack Developer", "Front-end Developer", "Web Developer"],
      typeSpeed: 50,  // Speed of typing in ms
      backSpeed: 25,  // Speed of backspacing in ms
      backDelay: 1000, // Delay before starting to backspace
      startDelay: 500, // Delay before starting typing
      loop: true, // Whether to loop the animation
      showCursor: false, // Show cursor
    };

    // Initialize Typed.js with the reference to the element and options
    const typed = new Typed(animatedTextEl.current, options);

    // Cleanup the Typed.js instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on mount


  return (
    <main className='home-main'>
      <Card className={"home-main__card"}>
        <div className='home-main__text-box'>
        <h1 className='home-main__title'>Hi Im Bilal,</h1>
        <p ref={animatedTextEl} className='home-main__animated-text'></p>
        </div>
        <div className='home-main__icon-flex'>
          <p className='home-main__socials-text'>I'm on</p>
        <IconsContainer className={"home-main__icons-container"} iconClass={"home-main__icons"}/>
        </div>
      </Card>
    </main>
  )
}

export default MainSection