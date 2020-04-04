import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <Container>
      <h1>Coaster App!</h1>
      <hr />
      <p>Diversión con React</p>
      <Row>
        <Col xs={12} md={8}>
          <img
            className="fpimg"
            src="https://res.cloudinary.com/dwnz2epom/image/upload/v1586031816/coasters/rollerCoaster_wklhqv.jpg"
            alt="RollerCoaster"
          ></img>
        </Col>
        <Col xs={12} md={4}>
          <p>
            En esta página podras encontrar ¡Las Montañas Rusas más
            impresionantes del mundo!
            <br />
            Tambien podras crear una cuenta y subir tus favoritas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
