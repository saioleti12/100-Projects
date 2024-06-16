import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Final from "./select.jsx";
import Select1 from "./select.jsx";
import Select2 from "./select.jsx";
import App2 from "./select.jsx";
import reportWebVitals from "./reportWebVitals";
import SignUpForm from "./SignUp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Final />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
