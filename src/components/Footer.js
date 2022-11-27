import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style = {{height: '50px', paddingRight: '0px', paddingTop: '15px'}}>
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/zi-win"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/ziwin"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Thank you for visting!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}