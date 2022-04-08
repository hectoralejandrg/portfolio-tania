import React from "react";
import Bar from "./Bar";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="bar-container">
        <Bar skill={"SKETCHUP"} porcent={75} />
        <Bar skill={"VRA-Y"} porcent={75} />
        <Bar skill={"RHINO"} porcent={60} />
        <Bar skill={"AUTOCAD"} porcent={60} />
        <Bar skill={"LAYOUT"} porcent={75} />
        <Bar skill={"PHOTOSHOP"} porcent={60} />
      </div>
      <div className="skills-title">
        <h2>Mis habilidades</h2>
      </div>
    </div>
  );
};

export default Skills;
