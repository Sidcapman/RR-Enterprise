import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Welcomepage.css"; // Create this CSS file to style the component
import robotichand from "./robotichand.jpg";
function WelcomePage() {
  return (
    <div className="above-welcome-page">
      <div className="welcome-page">
        <Container fluid>
          <Row>
            <Col md={2}></Col>
            <Col md={6} className="left-col">
              <p className="big-text">Welcome to RR Enterprises</p>
            </Col>
            <Col md={3} className="right-col">
              <p className="small-text">
                At RR Enterprises, we specialize in developing cutting-edge
                robotic technology for various industries.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        src={robotichand} // Path to your robotic hand image
        alt="Robotic Hand"
        className="robotic-hand-image"
      />
    </div>
  );
}

export default WelcomePage;
