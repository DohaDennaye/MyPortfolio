import { Container, Row, Col } from "react-bootstrap";
import { ContactEmail } from "./ContactEmail";
import logod from "../assets/img/logod.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Github } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <ContactEmail />
          <Col size={12} sm={6}>
            <img src={logod} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/doha-dennaye-" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/doha.dn.990526" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/dohadennaye" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/DohaDennaye" target="_blank" rel="noopener noreferrer"><Github color="white" size={20} /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
