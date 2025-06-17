import React from "react";
import Nav from "../components/Nav/Nav";
import "./LayOut.scss";
import Footer from "../components/Footer/Footer";

function LayOut({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-wrapper" role="main" >{children}</div>
      <Footer/>
    </div>
  );
}

export default LayOut;
