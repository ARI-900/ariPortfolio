import React from 'react';
import { FaCode, FaServer, FaCog } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaCode,
      skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Django', 'GSAP', ],
      color: '#00d4ff'
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      skills: ['Node.js', 'Python', 'Express.js', 'MongoDB', 'MySQL'],
      color: '#00ff88'
    },
    {
      title: 'Tools & Others',
      icon: FaCog,
      skills: ['Git & GitHub', 'Firebase', 'DSA', 'AI/ML', 'GenAI'],
      color: '#a855f7'
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  <category.icon />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ 
                      '--skill-color': category.color,
                      '--skill-color-light': category.color + '20'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 