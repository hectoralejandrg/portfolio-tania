import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>
        Me considero una persona responsable y en constante aprendizaje en el mundo del diseño de interiores. Mi objetivo principal es demostrar aptitudes en todos los proyectos, exponer propuestas organizadas y auténticas. Creo que todo trabajo basado en actitud, perseverancia y optimismo genera excelentes resultados.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
