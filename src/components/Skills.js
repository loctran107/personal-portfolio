import { Container , Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


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
                                    <img src={meter1} alt="Image" />
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" /> 
                                    <h5>Artificial Intelligence</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" /> 
                                    <h5>Embedded System</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Stock Trading</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Computer Vision</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}