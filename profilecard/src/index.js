import React from "react";
import ReactDom from "react-dom/client";

import "./style.css";

const skills = [
  {
    skill: "HTML",
    level: "Advanced",
    color: "#E84F33",
  },
  {
    skill: "HTML",
    level: "Advanced",
    color: "#E84F33",
  },
];

function App() {
  return (
    <div className="cart">
      <Header />
      <Name />
      <Content />
      <SkillSet />
      {/* <Items /> */}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="office1.webp" alt="logo" />
    </div>
  );
}
function Name() {
  return (
    <div className="name">
      <h2>Chaitanya Sai</h2>
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <p>
        Full-Stack web devloper and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook, or to just
        enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}
function SkillSet() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function skill(skill, color, level) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}
// function Items() {
//   return (
//     <div className="items">
//       <div className="wrap">
//         <h3 className="html">HTML+Css</h3>
//         <h3 className="js">Javascript</h3>
//         <h3 className="wd">Web Design</h3>
//         <h3 className="git">Git and Github</h3>
//         <h3 className="react">React</h3>
//         <h3 className="sv">Svelte</h3>
//       </div>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
