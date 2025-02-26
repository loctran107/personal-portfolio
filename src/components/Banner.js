import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{ "Hi I'm embedded system engineer " }<span className="wrap"> embedded system engineer</span></h1>
                        <p> I am an Embedded Systems Engineer passionate about designing and optimizing cutting-edge technology. With a strong foundation in hardware-software integration, I am eager to learn, innovate, and contribute to impactful projects. My goal is to join a leading tech company like NVIDIA, Google, or Amazon and help build products that shape the future. I thrive on solving complex challenges and am driven by a desire to create meaningful technology that makes a real-world impact. 🚀</p>
                        <button onClick={ () => console.log('connect')}> Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}