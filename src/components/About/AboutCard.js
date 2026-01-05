import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Alfredo Aguilar</span> de{" "}
            <span className="purple">Guatemala</span>.
            <br />
            Actualmentente busco trabajo como{" "}
            <span className="purple">Desarrollador de Software</span>
            <br />
            <br />
            Más allá del código, disfruto de actividades que alimentan mi
            creatividad e inspiración:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar Guitarra 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Montañismo, Escalar Volcanes 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aspira a construir soluciones que generen un impacto real."{" "}
          </p>
          <footer className="blockquote-footer">Alfredo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
