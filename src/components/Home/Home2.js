import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/undraw_developer-avatar_f6ac.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOBRE<span className="purple"> MI </span>
            </h1>
            <p className="home-about-body">
              Soy un desarrollador de software al que le apasiona transformar
              ideas en productos confiables y escalables. Con el tiempo, he
              explorado diversas tecnologías y he encontrado mi pasión en la
              construcción de sistemas de alto rendimiento y experiencias de
              usuario intuitivas.
              <br />
              <br />
              Cuento con conocimientos en
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, ReactJs, React Native, PHP, Node.js, MySQL,
                  MongoDB.{" "}
                </b>
              </i>
              Disfruto del desarrollo integral, abarcando tanto el backend como
              el frontend.
              <br />
              <br />
              Mis principales áreas de interés incluyen el desarrollo de
              <i>
                <b className="purple">
                  {" "}
                  aplicaciones web escalables, la arquitectura de microservicios
                  y la creación de experiencias móviles nativas de alto
                  rendimiento.{" "}
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                height={217}
                width={237}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
