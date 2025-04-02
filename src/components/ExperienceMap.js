import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  let duration = '';
  if (years > 0) duration += `${years} yr${years > 1 ? 's' : ''} `;
  if (months > 0 || duration === '') duration += `${months} mo${months > 1 ? 's' : ''}`;
  
  return duration.trim();
};

export const ExperienceMap = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Schweitzer Engineering Laboratories",
      url: "https://selinc.com",
      period: "Jan 2021 - Present",
      description: "Led firmware development for 5+ embedded relay projects in C/C++, integrating Jenkins for 20% faster build deployment and boosting reliability by 15% across 10 SEL-4XX devices in 50+ power grids",
    },
    {
      title: "Electrical and Computer Engineering Tutor",
      company: "Varsity Tutors",
      url: "https://www.varsitytutors.com",
      period: "Sep 2020 - Dec 2020",
      description: "Tutored 100+ students in C/C++, Java, and Python, improving assessment scores by 20%.",
    },
    {
      title: "Software Engineer Intern",
      company: "University of Washington, Seattle",
      url: "https://www.washington.edu",
      period: "June 2019 - Aug 2019",
      description: "Developed a liver-blob detection algorithm for 3D IVC modeling from ultrasound, improving accuracy by 25% across 40 scans.",
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <h2 className="experience-title text-center mb-5">Experience</h2>
        <div className="experience-timeline position-relative">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div 
                className={`timeline-bar ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}
              />
            )}
          </TrackVisibility>
          
          {experiences.map((exp, index) => {
            const [startDate, endDate] = exp.period.split(' - ');
            const duration = calculateDuration(startDate, endDate);

            return (
              <TrackVisibility key={index} partialVisibility>
                {({ isVisible }) => (
                  <Card
                    className={`experience-item mb-4 ${
                      isVisible ? 'animate__animated animate__slideInUp' : ''
                    }`}
                    onClick={() => handleCardClick(exp.url)}
                  >
                    <Card.Body className="experience-content">
                      <Card.Title as="h3">{exp.company}</Card.Title>
                      <Card.Subtitle as="h4" className="mb-2">
                        {exp.title}
                      </Card.Subtitle>
                      <Card.Text className="period">
                        {exp.period} ({duration})
                      </Card.Text>
                      <Card.Text>{exp.description}</Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </TrackVisibility>
            );
          })}
        </div>
      </Container>
    </section>
  );
};