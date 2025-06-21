import React from "react";
import LayOut from "../../LayOut/LayOut";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Plans.scss"
function Plans() {
  return (
    <LayOut>
      <SectionHeading TitleText={"Packages"} />
      <section className="plans">
        <div className="plans__text-container">
          <h1 className="plans__title">
            Launch Packages <br></br> Built for Results
          </h1>
          <p className="plans__paragraph">
            Fast, responsove websites that look good, load fast, and get your
            business online without the bloat.
          </p>
        </div>
        <button className="plans__quote-btn">Get a Free quote</button>
      </section>
    </LayOut>
  );
}

export default Plans;
