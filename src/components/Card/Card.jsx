import React from "react";
import "./Card.scss";
function Card({ children, className, color}) {
 
  return (
    <article
      className={`card ${className}`}
      style={{
        border: color? `1px solid ${color}` : "1px solid #2f2f2f" ,
      }}
    >
      {children}
    </article>
  );
}

export default Card;
