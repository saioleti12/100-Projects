// import { Flex, Input } from "antd";
// import "./App.css";
// import { SettingOutlined } from "@ant-design/icons";
// import { MailOutlined } from "@ant-design/icons";
// import { Button, Menu } from "antd";
// import React, { useState } from "react";

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="signup-form">
//       <div className="fName">
//         <label htmlFor="firstName">First Name</label>
//         <Input
//           vertical
//           gap={12}
//           placeholder=""
//           variant="filled"
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="lName">
//         <label htmlFor="lastName">Last Name</label>
//         <Input
//           placeholder=""
//           variant="filled"
//           type="text"
//           id="lastName"
//           name="lirstName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         ></Input>
//       </div>

//       <label htmlFor="email">Email</label>
//       <Input
//         className="email"
//         placeholder=""
//         variant="filled"
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <div className="btns">
//         <Flex gap="small" wrap>
//           <Button type="primary" id="btn1">
//             Disable User
//           </Button>
//           <Button type="primary" id="btn2">
//             {" "}
//             Set Password
//           </Button>
//         </Flex>
//       </div>
//     </form>
//   );
// };
// export default SignUpForm;
