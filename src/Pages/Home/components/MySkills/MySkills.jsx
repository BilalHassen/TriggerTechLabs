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
        <SkillContainer title={"Custom Website Development"}
        percentage={"100%"}
        prefixClass={"my-skills"}
        progressWidth={100}
        color={"green"}
        />
         <SkillContainer title={"Responsive Layouts"}
        percentage={"90%"}
        prefixClass={"my-skills"}
        progressWidth={90}
        color={"pink"}
        />
         <SkillContainer title={"Landing Page Development"}
        percentage={"100%"}
        prefixClass={"my-skills"}
        progressWidth={100}
        color={"blue"}
        />
         <SkillContainer title={"Contact Forms & Email Integration"}
        percentage={"88%"}
        prefixClass={"my-skills"}
        progressWidth={88}
        color={"yellow"}
        />
         <SkillContainer title={"Clear Communication"}
        percentage={"96%"}
        prefixClass={"my-skills"}
        progressWidth={96}
        color={"red"}
        />
      </Card>
    </div>
  );
}

export default MySkills;
