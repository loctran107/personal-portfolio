import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import sympholingo from "../assets/img/sympholingo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Sympholingo",
      description: "AI-powered Language Learning App",
      imgUrl: sympholingo,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    // Uncomment to test with more projects
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  // Dynamically calculate Col size based on the number of projects
  const getColSize = (projectCount) => {
    if (projectCount === 1) return { xs: 12, sm: 12, md: 12 }; // Full width for 1 project
    if (projectCount === 2) return { xs: 12, sm: 6, md: 6 };   // Half width for 2 projects (side by side)
    if (projectCount <= 4) return { xs: 12, sm: 6, md: 4 };   // 1 per row on extra small, 2 per row on small, 3 per row on medium
    return { xs: 12, sm: 6, md: 3 };                          // 1 per row on extra small, 2 per row on small, 4 per row on medium for 5+ projects
  };

  const colSize = getColSize(projects.length);

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className="mb-3">Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Hackthon Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Solo Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Collab Project</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content
                  id="slideInUp"
                  className={isVisible ? "animate__animated animate__slideInUp" : ""}
                >
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-center">
                      {projects.map((project, index) => (
                        <Col
                          key={index}
                          xs={colSize.xs}
                          sm={colSize.sm}
                          md={colSize.md}
                          className="d-flex justify-content-center"
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          )}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};