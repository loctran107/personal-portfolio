// components/ExperienceMap.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

export const ExperienceMap = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Developed web applications using React and Node.js",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2018 - 2020",
      description: "Assisted in building RESTful APIs and frontend components",
    },
  ];

  return (
    <section className="experience">
      <Container>
        <h2 className="experience-title text-center mb-5">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Card key={index} className="experience-item mb-4">
              <Card.Body className="experience-content">
                <Card.Title as="h3">{exp.title}</Card.Title>
                <Card.Subtitle as="h4" className="mb-2">
                  {exp.company}
                </Card.Subtitle>
                <Card.Text className="period">{exp.period}</Card.Text>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};