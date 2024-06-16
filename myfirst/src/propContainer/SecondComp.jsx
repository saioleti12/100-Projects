import React from "react";

const SecondComp = (props) => {
  const { game1, game2, game3, game4 } = props.myGames;
  return (
    <div>
      <div>{game1}</div>
      <div>{game2}</div>
      <div>{game3}</div>
      <div>{game4}</div>
    </div>
  );
};

export default SecondComp;
