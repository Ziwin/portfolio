import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hello! I'm Zi Win`} </h1>
                        <p>I am a senior at the University of Tennessee. I most recently worked on the AVA Chatbot Team at Airasia as a SWE intern. I've also led a Fullstack Development team as a Product Manager at Hack4ImpactUTK - a club which helps non-profit organizations build websites. 
                            
                        </p>
                        <p>
                        I've always been passionate about software and its impacts on people. I have particular interests in IOT, web development, and cloud services.

                        </p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}