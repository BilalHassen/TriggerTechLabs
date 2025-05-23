import React from "react";
import Card from "@components/Card/Card";
import SkillContainer from "../SkillContainer/SkillContainer";
import "./MySkills.scss";
import { SKILLS } from "./mySkillsData";

function MySkills() {
  return (
    <div className="my-skills">
      <Card className="my-skills__card">
        <h1 className="my-skills__heading">Core Capabilities</h1>
        {SKILLS.map((skill, index) => (
          <SkillContainer
            key={index}
            title={skill.title}
            percentage={skill.percentage}
            prefixClass="my-skills"
            progressWidth={skill.progressWidth}
            color={skill.color}
          />
        ))}
      </Card>
    </div>
  );
}

export default MySkills;
