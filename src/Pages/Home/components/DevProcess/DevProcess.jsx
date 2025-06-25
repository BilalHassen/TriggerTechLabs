import React from "react";
import Card from "@components/Card/Card";
import "./DevProcess.scss";
import ColorBar from "@components/ColorBar/ColorBar";
import processData from "./processData";
import SectionHeading from "@components/SectionHeading/SectionHeading";
function DevProcess() {
  return (
    <>
     <SectionHeading TitleText={"The Process"}/>

      <section className="dev-process">
        {processData.map((step) => {
          const Icon = step.icon;
          return (
            <Card key={step.id} className={"dev-process__card"}>
              <h3
                className="dev-process__card-title"
                style={{ color: `${step.color}` }}
              >
                {step.title}
              </h3>
              <div className="dev-process__card-wrapper">
                <Icon className="dev-process__icon" color={step.color} />
                <p className="dev-process__subTitle">{step.subTitle}</p>
              </div>
              <p className="dev-process__description">{step.description}</p>
            </Card>
          );
        })}
      </section>
    </>
  );
}

export default DevProcess;
