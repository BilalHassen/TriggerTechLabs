import React from 'react'
import "./Projects.scss"
import LayOut from '../../LayOut/LayOut'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
export default function Projects() {
  return (
    <LayOut>
      
<section className='projects'>
  <SectionHeading TitleText={"Projects"}/>
       <ProjectsContainer/>
       </section>
    </LayOut>
  )
}
