import React from "react";
import techData from "@/data/techStack";
import "./TechStack.scss";
import TechStackCard from "../TechStackCard/TechStackCard";
import ColorBar from "@components/ColorBar/ColorBar";
import SectionHeading from "@components/SectionHeading/SectionHeading";

function TechStack() {
  return (
    <>
      <SectionHeading TitleText={"Tech Stack"}/>
      <section className="tech-stack-section" aria-labelledby="tech-stack-title">
        <div className="tech-stack">
          {techData.map((techItem) => (
            <TechStackCard
              key={techItem.id}
              name={techItem.name}
              techItem={techItem}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default TechStack;
