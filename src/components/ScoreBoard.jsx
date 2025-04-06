import React from "react";

const ScoreBoard = ({ score }) => {

  return (
    <div style={{ color: "purple", padding: "30px " }}>
      <h2>{score}</h2>
    </div>
  );
};

export default ScoreBoard;
