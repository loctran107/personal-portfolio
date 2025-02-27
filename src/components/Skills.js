import { Container , Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


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
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}