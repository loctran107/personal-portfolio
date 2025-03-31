import { Container , Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import machine_learning from "../assets/img/machine-learning.svg";
import artificial_intelligence from "../assets/img/artificial-intelligence.svg";
import computer_vision from "../assets/img/computer-vision.svg";
import embedded_system from "../assets/img/embedded-system.svg";
import stock from "../assets/img/stock.svg";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    // TODO: Makes skilsl percentage more dynamic.
    //       either auto-generate or constant
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> Programming Languages: Python, C/C++, JavaScript, VLIW SHARC Assembly, SQL<br />
                                Framework & Technologies: React, Node.js, BootStrap<br />
                                Tools & Cloud Services: Docker, Git, AWS, Git, Github
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={machine_learning} alt="Image" />
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={artificial_intelligence} alt="Image" /> 
                                    <h5>Artificial Intelligence</h5>
                                </div>
                                <div className="item">
                                    <img src={embedded_system} alt="Image" /> 
                                    <h5>Embedded System</h5>
                                </div>
                                <div className="item">
                                    <img src={computer_vision} alt="Image" />
                                    <h5>Computer Vision</h5>
                                </div>
                                <div className="item">
                                    <img src={stock} alt="Image" />
                                    <h5>Stock Trading</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
            <img className="background-image-right" src={colorSharp2} alt="Image" />
        </section>
    )
}