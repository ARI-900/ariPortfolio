import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'arichowdhury900@gmail.com',
      color: '#00d4ff'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9007015673',
      color: '#00ff88'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Kolkata, West Bengal, India',
      color: '#a855f7'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaGlobe, href: '#', label: 'Website' }
  ];

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
        </p>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <h3 className="contact-form-title">Send Message</h3>
            <form onSubmit={handleSubmit} className="contact-form" data-netlify="true" name="contact">

              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">Feel free to reach out through any of these channels. I typically respond within 24 hours.</p>
              
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card" style={{ borderColor: info.color }}>
                    <div className="contact-icon" style={{ backgroundColor: info.color }}>
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
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
        </div>
      </div>
    </div>
  );
};

export default Contact; 