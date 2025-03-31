// components/ExperienceMap.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'animate.css'; // Ensure animate.css is imported
import TrackVisibility from 'react-on-screen'; // Import TrackVisibility

export const ExperienceMap = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Schweitzer Engineering Laboratories",
      period: "Jan 2021 - Present",
      description: "Led firmware development for 5+ embedded relay projects in C/C++, integrating Jenkins for 20% faster build deployment and boosting reliability by 15% across 10 SEL-4XX devices in 50+ power grids",
    },
    {
      title: "Electrical and Computer Engineering Tutor",
      company: "Varsity Tutors",
      period: "Sep 2020 - Dec 2020",
      description: "Tutored 100+ students in C/C++, Java, and Python, improving assessment scores by 20%.",
    },
    {
      title: "Software Engineer Intern",
      company: "University of Washington, Seattle", // Fixed typo in "Washington"
      period: "June 2019 - Aug 2019",
      description: "Developed a liver-blob detection algorithm for 3D IVC modeling from ultrasound, improving accuracy by 25% across 40 scans.",
    },
  ];

  return (
    <section className="experience">
      <Container>
        <h2 className="experience-title text-center mb-5">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <TrackVisibility key={index} partialVisibility>
              {({ isVisible }) => (
                <Card
                  className={`experience-item mb-4 ${
                    isVisible ? 'animate__animated animate__slideInUp' : ''
                  }`}
                >
                  <Card.Body className="experience-content">
                    <Card.Title as="h3">{exp.company}</Card.Title>
                    <Card.Subtitle as="h4" className="mb-2">
                      {exp.title}
                    </Card.Subtitle>
                    <Card.Text className="period">{exp.period}</Card.Text>
                    <Card.Text>{exp.description}</Card.Text>
                  </Card.Body>
                </Card>
              )}
            </TrackVisibility>
          ))}
        </div>
      </Container>
    </section>
  );
};