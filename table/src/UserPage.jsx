// import "./App.css";
// import React, { useState, useEffect } from "react";

// const userDetails = "https://jsonplaceholder.typicode.com/users";

// const UserPage = () => {
//   const [user, setUser] = useState([]);

//   const userHandler = async () => {
//     const response = await fetch(userDetails);
//     const newData = await response.json();
//     setUser(newData);
//   };
//   useEffect(() => {
//     console.log(userHandler);
//   }, []);
//   console.log(user);
//   return (
//     <div>
//       {user.map((item) => {
//         return <div>{item.email}</div>;
//       })}
//     </div>
//   );
// };

// export default UserPage;

import React, { useState, useEffect } from "react";
import "./index.js";
const UserDetails = "https://jsonplaceholder.typicode.com/users";

const Data = () => {
  const [user, setUser] = useState(UserDetails);

  const userHandler = async () => {
    const response = await fetch(UserDetails);
    const newData = await response.json();
    setUser(newData);
  };
  useEffect(() => {
    console.log(userHandler);
  }, []);
};
export default Data;
