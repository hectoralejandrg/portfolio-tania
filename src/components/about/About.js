import React from "react";
import "./About.css";
import img from "../../media/aboutme.jpg";

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
          src={img}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
