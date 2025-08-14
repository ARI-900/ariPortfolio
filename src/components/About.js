import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '25+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' }
  ];

  return (
    <div className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile.jpg" 
              alt="Arijit Chowdhury" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with over 3 years of experience building scalable web applications, android applications and AI/ML models. My journey started with curiosity about how websites work, and it has evolved into a deep love for creating digital solutions that make a difference.
            </p>
            <p className="about-description">
              As a CSE-AIML student, I specialize in Software Development, modern JavaScript frameworks, Databases, AI/ML, problem solving, and user experience design. When I'm not coding, you'll find me exploring new technologies or mentoring aspiring developers.
            </p>
            
            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a href="https://docs.google.com/document/d/e/2PACX-1vQ0VtlgSYKI9DXk0uXu4wDyylGNc3RZbYNYP8Wv-EakzriKZflAUi_Tl_UqxQs_Zm13LOTuZL7IIQVU/pub" target="_blank" className="btn btn-primary">
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 