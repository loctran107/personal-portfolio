import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom"; // ✅ Wrap with Router

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const period = 500;
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Embedded System Engineer", "Software Engineer", "Firmware Engineer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <Router> {/* ✅ Wrap the component with Router */}
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>{ "Hi I'm Donovan Tran. I'm a professional " }
                                            <span className="wrap">{text}</span>
                                        </h1>
                                        <p>
                                            I am a Software Engineer passionate about designing and optimizing 
                                            cutting-edge technology. With a strong foundation in hardware-software 
                                            integration, I am eager to learn, innovate, and contribute to impactful projects. 
                                            My goal is to join one of the leading tech companies such as NVIDIA, Google, 
                                            Microsoft, or Amazon and help build products that shape the future. 
                                            I thrive on solving complex challenges and am driven by a desire to create 
                                            meaningful technology that makes a real-world impact. 🚀
                                        </p>
                                        <HashLink to="#connect">
                                            <button onClick={() => console.log('connect')}>
                                                Let's connect <ArrowRightCircle size={25} />
                                            </button>
                                        </HashLink>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={headerImg} alt="Header Img" />
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    );
};
