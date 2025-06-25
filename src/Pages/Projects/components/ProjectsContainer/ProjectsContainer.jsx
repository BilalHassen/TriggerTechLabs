import React from "react";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import "./ProjectsContainer.scss";
import projectData from "@/Pages/Projects/ProjectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectsContainer() {
  console.log("Project Data", projectData);

  return (
    <section className="projects__wrapper">
    
      {projectData.map((projectData) => {
        return (
        <ProjectCard 
        key={projectData.id}
        title={projectData.title}
        description={projectData.description}
        thumbnails={projectData.thumbnails}
        textColor={projectData.textColor}
        />
        );
      })}
    </section>
  );
}

export default ProjectsContainer;
