import React from "react";
import "./ProjectCard.scss";
import ProjectThumbnails from "../ProjectThumbnails/ProjectThumbnails";
function ProjectCard({title, description, thumbnails, textColor}) {



  return (
    <article  style={{ '--textColor': `${textColor}`}} className="projects__card ">
      
         <ProjectThumbnails thumbnails={thumbnails}/>
      
      <div className="projects__card-wrapper">
        <h1 style={{color: `${textColor}`, '--textColor': `${textColor}`}}className="projects__card-title">{title}</h1>
        <p className="projects__card-description">{description}</p>
      </div>

    </article>
  );
}

export default ProjectCard;
