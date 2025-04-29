import React from "react";
import Card from "@components/Card/Card";
import "./MySkills.scss"


function MySkills() {
  return (
    <div className="my-skills">
      <Card className={"my-skills__card"}>
        <h1 className="my-skills__title">
            My Special Skills
        </h1>
      </Card>
    </div>
  );
}

export default MySkills;
