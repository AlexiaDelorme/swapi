import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <h1>{props.character.name}</h1>
      <h2>{props.character.height}</h2>
    </div>
  );
};
