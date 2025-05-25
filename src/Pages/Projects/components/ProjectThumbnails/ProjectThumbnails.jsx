import React from "react";
import "./ProjectThumbnails.scss";
function ProjectThumbnails({ thumbnails }) {
  console.log("from thumbnails", thumbnails);

  return (
    <>
    {thumbnails.map((img)=>(
      <img className="projects__img" src={img.src} alt={img.alt} />
    ))}
   </>
  );
}

export default ProjectThumbnails;
