import React from "react";
import Nav from "../components/Nav/Nav";
import "./LayOut.scss";

function LayOut({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-wrapper">{children}</div>
    </div>
  );
}

export default LayOut;
