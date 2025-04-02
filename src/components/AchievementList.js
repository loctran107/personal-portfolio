// components/AchievementList.js
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const AchievementList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "React.js Developer Certificate",
      issuer: "Udemy",
      url: "https://www.udemy.com",
      date: "March 2023",
      description: "Completed a 40-hour course on React.js, mastering hooks, state management, and component design.",
    },
    {
      title: "Hackathon Winner - Best AI Solution",
      issuer: "TechFest 2022",
      url: "https://techfest.org",
      date: "October 2022",
      description: "Led a team to develop an AI-powered energy optimization tool, winning 1st place among 50 teams.",
    },
    {
      title: "Python for Data Science Certificate",
      issuer: "Udemy",
      url: "https://www.udemy.com",
      date: "July 2021",
      description: "Earned a certificate after completing a comprehensive course on Python, pandas, and machine learning basics.",
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleAchievements = [
    achievements[currentIndex],
    achievements[(currentIndex + 1) % achievements.length],
  ];

  return (
    <section className="achievement" id="achievements">
      <Container>
        <h2 className="achievement-title text-center mb-5">Achievements</h2>
        <div className="achievement-list d-flex justify-content-center align-items-center">
          <button className="arrow-btn left-arrow" onClick={handlePrev}>
            ◀
          </button>
          <div className="achievement-container d-flex">
            {visibleAchievements.map((ach, index) => (
              <TrackVisibility key={index} partialVisibility>
                {({ isVisible }) => (
                  <Card
                    className={`achievement-item mx-3 ${
                      isVisible ? 'animate__animated animate__fadeIn' : ''
                    }`}
                    onClick={() => handleCardClick(ach.url)}
                  >
                    <Card.Body className="achievement-content">
                      <Card.Title as="h3">{ach.title}</Card.Title>
                      <Card.Subtitle as="h4" className="mb-2">
                        {ach.issuer}
                      </Card.Subtitle>
                      <Card.Text className="date">{ach.date}</Card.Text>
                      <Card.Text>{ach.description}</Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </TrackVisibility>
            ))}
          </div>
          <button className="arrow-btn right-arrow" onClick={handleNext}>
            ▶
          </button>
        </div>
      </Container>
    </section>
  );
};