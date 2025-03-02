import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import DTLogo from '../assets/img/DT_Logo.svg';
import linkedinIcon from "../assets/img/linkedin-icon.svg";
import githubIcon from "../assets/img/github_dark.png";
import instaIcon from "../assets/img/insta-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={DTLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="#"><img src={githubIcon} alt="Icon" /></a>
              <a href="#"><img src={instaIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
