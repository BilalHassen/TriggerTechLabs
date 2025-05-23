import React from "react";
import "./Card.scss";
function Card({ children, title, className, imgSrc }) {
  return <article className={`card ${className}`}>{children}</article>;
}

export default Card;
