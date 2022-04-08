import React from "react";
import cvPdf from "../../media/cv.pdf";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Tania Avila Loor</h1>
        <p>Ecuador, Guayaquil</p>
        <a className="download" href={cvPdf} download="TANIA_AVILA_LOOR">
          DESCARGA CV
        </a>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>Y trabajemos juntos</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Redes</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/tania-avila-532a88201"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
