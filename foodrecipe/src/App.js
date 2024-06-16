import { useState, useEffect } from "react";

const Header = () => {
  const myStyle = {
    backgroundColor: "DodgerBlue",
  };
  return (
    <>
      <body style={myStyle}>
        <h1>Hello React</h1>
        <p>Add a little style</p>
      </body>
    </>
  );
};

export default Header;
