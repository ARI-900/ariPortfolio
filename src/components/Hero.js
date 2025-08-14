import React, { useState, useEffect } from 'react';
import { FaFolderOpen, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Software Engineer",
    "Full Stack Web Developer",
    "Android Developer",
    "AI/ML Engineer"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts]);

  const socialLinks = [
    { icon: FaGlobe, href: '#', label: 'Website' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#', label: 'Email' }
  ];

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Arijit Chowdhury</span>
            </h1>
            
            <div className="typewriter-container">
              <h2 className="typewriter-text">
                {texts[currentTextIndex].substring(0, currentCharIndex)}
                <span className="cursor">|</span>
              </h2>
            </div>
            
            <p className="hero-description">
              Passionate about creating elegant solutions across multiple domains - from web applications to mobile apps and machine learning models. I bring ideas to life with cutting-edge technologies.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <FaFolderOpen />
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <FaEnvelope />
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
