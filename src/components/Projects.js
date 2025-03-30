import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import website_portfolio from "../assets/img/website-portfolio.svg";
import chess_game from "../assets/img/tcp-ip-chess-game.svg";
import sympholingo from "../assets/img/sympholingo.png";
import tetris from '../assets/img/tetris.svg';
import ShuttleView from '../assets/img/ShuttleView.svg';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const hackathonProjects = [
    {
        title: "Sympholingo",
        description: "AI-powered Language Learning App",
        imgUrl: sympholingo,
        repoUrl: "https://github.com/loctran107/Sympholingo"
    },
    ];
      
    const soloProjects =
    [
        {
            title: "Portfolio Site",
            description: "Personal website built with React",
            imgUrl: website_portfolio,
            repoUrl: "https://github.com/loctran107/personal-portfolio"
        },
        {
            title: "TCP IP ChessGame",
            description: "Terminal-based Chess Game played between two players over TCP/IP",
            imgUrl: chess_game,
            repoUrl: "https://github.com/loctran107/TCP_IP_ChessGame"
        },
        {
            title: "Gesture Controlled Tetris Game",
            description: "Tetris game controlled by hand gestures using OpenCV and Python",
            imgUrl: tetris,
            repoUrl: "https://github.com/loctran107/Gesture_Controlled_Tetris_Game"
        },
        {
            title: "ShuttleView",
            description: "Real-time shuttle tracking application for judges and players",
            imgUrl: ShuttleView,
            repoUrl: "https://github.com/loctran107/ShuttleView"
        },
        {
            title: "stockAI",
            description: "Artificial Intelligence stock prediction application",
            imgUrl: projImg1,
            repoUrl: "https://github.com/loctran107/stockAI"
        },
        {
            title: "LED Matrix",
            description: "LED Matrix display controlled by a Raspberry Pi and Python",
            imgUrl: projImg1,
            repoUrl: "https://github.com/loctran107/Led_Matrix"
        },
    ];
    
    const collabProjects = [
    {
        title: "BuzzBid",
        description: "Group project for a bidding website using React and Node.js",
        imgUrl: projImg2,
        repoUrl: "https://github.com/loctran107/buzzbid"
    },
    ];

  // Dynamically calculate Col size based on the number of projects
  const getColSize = (projectCount) => {
    if (projectCount === 1) return { xs: 12, sm: 12, md: 12 }; // Full width for 1 project
    if (projectCount === 2) return { xs: 12, sm: 6, md: 6 };   // Half width for 2 projects (side by side)
    if (projectCount <= 4) return { xs: 12, sm: 6, md: 4 };   // 1 per row on extra small, 2 per row on small, 3 per row on medium
    return { xs: 12, sm: 6, md: 3 };                          // 1 per row on extra small, 2 per row on small, 4 per row on medium for 5+ projects
  };

  const hackathonColSize = getColSize(hackathonProjects.length);
  const soloColSize = getColSize(soloProjects.length);
  const collabColSize = getColSize(collabProjects.length);
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
                    <Nav.Link eventKey="first">Solo Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Collab Project</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Hackthon Project</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content
                  id="slideInUp"
                  className={isVisible ? "animate__animated animate__wobble" : ""}
                >
                  <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                            {soloProjects.map((soloProjects, index) => (
                                <Col
                                key={index}
                                xs={soloColSize.xs}
                                sm={soloColSize.sm}
                                md={soloColSize.md}
                                className="d-flex justify-content-center"
                                >
                                <ProjectCard
                                    title={soloProjects.title}
                                    description={soloProjects.description}
                                    imgUrl={soloProjects.imgUrl}
                                    repoUrl={soloProjects.repoUrl}
                                />
                                </Col>
                            ))}
                        </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                            {collabProjects.map((collabProjects, index) => (
                                <Col
                                key={index}
                                xs={collabColSize.xs}
                                sm={collabColSize.sm}
                                md={collabColSize.md}
                                className="d-flex justify-content-center"
                                >
                                <ProjectCard
                                    title={collabProjects.title}
                                    description={collabProjects.description}
                                    imgUrl={collabProjects.imgUrl}
                                    repoUrl={collabProjects.repoUrl}
                                />
                                </Col>
                            ))}
                        </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row className="justify-content-center">
                      {hackathonProjects.map((hackathonProjects, index) => (
                        <Col
                          key={index}
                          xs={hackathonColSize.xs}
                          sm={hackathonColSize.sm}
                          md={hackathonColSize.md}
                          className="d-flex justify-content-center"
                        >
                          <ProjectCard
                            title={hackathonProjects.title}
                            description={hackathonProjects.description}
                            imgUrl={hackathonProjects.imgUrl}
                            repoUrl={hackathonProjects.repoUrl}
                          />
                        </Col>
                      ))}
                    </Row>
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