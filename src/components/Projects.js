import React from 'react';
import { FaExternalLinkAlt, FaCode, FaUsers, FaCloud } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Sorting Visualizer - C++ DSA Platform',
      description: 'Interactive platform that visually demonstrates key sorting algorithms including BubbleSort, SelectionSort, InsertionSort, QuickSort, and MergeSort with step-by-step animated visual representations and color-coded actions.',
      technologies: ['C++', 'Graphics Library', 'DSA'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      liveDemo: 'https://www.google.com/url?q=https://github.com/ARI-900/DSA-visualization&sa=D&source=editors&ust=1755161155124262&usg=AOvVaw1PxCGnn6cllLNuCPp4eqFs',
      code: 'https://www.google.com/url?q=https://github.com/ARI-900/DSA-visualization&sa=D&source=editors&ust=1755161155124262&usg=AOvVaw1PxCGnn6cllLNuCPp4eqFs'
    },
    {
      title: 'C++ DSA Library',
      description: 'Robust & scalable template-based C++ library implementing core data structures like Linked Lists and Binary Search Trees. Features clean, header-only modules with reusable components and detailed documentation.',
      technologies: ['C++11+', 'Templates', 'Data Structures', 'OOP'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
      liveDemo: 'https://www.google.com/url?q=https://github.com/ARI-900/DSA_LIBRARY&sa=D&source=editors&ust=1755161155126182&usg=AOvVaw127QZWyzvYzg0NZvx-QKuQ',
      code: 'https://www.google.com/url?q=https://github.com/ARI-900/DSA_LIBRARY&sa=D&source=editors&ust=1755161155126182&usg=AOvVaw127QZWyzvYzg0NZvx-QKuQ'
    },
    {
      title: 'HotelRoofTop - Hotel Advertising Platform',
      description: 'Full-stack web application connecting hotels with users. Features hotel listing UI with image sliders, contact details, and responsive layouts. Implemented caching with Redux-Toolkit improving performance by 42%.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Redux-Toolkit'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      liveDemo: '#',
      code: '#'
    },
    {
      title: 'AI-Powered Code Assistant',
      description: 'Intelligent full-stack platform that reviews code, suggests improvements, fixes bugs, and generates optimized code snippets powered by Google Gemini AI with custom-trained model.',
      technologies: ['React', 'Tailwind CSS', 'React CodeMirror', 'Node.js', 'Express.js', 'Google Gemini AI'],
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400&h=300&fit=crop',
      liveDemo: 'https://www.google.com/url?q=https://github.com/ARI-900/AI-Code-Generator-Reviewer&sa=D&source=editors&ust=1755161155131922&usg=AOvVaw1RmzYX37m3xWQi77PQ7bQZ',
      code: 'https://www.google.com/url?q=https://github.com/ARI-900/AI-Code-Generator-Reviewer&sa=D&source=editors&ust=1755161155131922&usg=AOvVaw1RmzYX37m3xWQi77PQ7bQZ'
    }
  ];

  const getTechnologyColor = (tech) => {
    const colors = {
      'React': '#00d4ff',
      'React.js': '#00d4ff',
      'Node.js': '#00ff88',
      'Express.js': '#00ff88',
      'MongoDB': '#a855f7',
      'Tailwind CSS': '#a855f7',
      'Redux-Toolkit': '#764abc',
      'C++': '#00599c',
      'C++11+': '#00599c',
      'Graphics Library': '#ff6b35',
      'DSA': '#f7df1e',
      'Data Structures': '#f7df1e',
      'Templates': '#ff6b35',
      'OOP': '#f7df1e',
      'Google Gemini AI': '#4285f4',
      'React CodeMirror': '#00d4ff'
    };
    return colors[tech] || '#00d4ff';
  };

  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveDemo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaCode />
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="technology-tag"
                      style={{ backgroundColor: getTechnologyColor(tech) + '20', color: getTechnologyColor(tech) }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 