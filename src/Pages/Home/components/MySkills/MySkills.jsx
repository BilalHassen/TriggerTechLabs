import React from "react";
import Card from "@components/Card/Card";
import SkillContainer from "../SkillContainer/SkillContainer";
import "./MySkills.scss"


function MySkills() {
  return (
    <div className="my-skills">
      <Card className={"my-skills__card"}>
        <h1 className="my-skills__heading">
            My Special Skills
        </h1>
        <SkillContainer title={"Custom Website"}
        percentage={"100%"}
        prefixClass={"my-skills"}
        progressWidth={100}
        />
         <SkillContainer title={"JS"}
        percentage={"70%"}
        prefixClass={"my-skills"}
        progressWidth={70}
        />
      </Card>
    </div>
  );
}

export default MySkills;
