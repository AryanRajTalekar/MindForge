import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1 className="about-heading">About <span className="highlight">MindForge</span></h1>
        <p className="about-text">
          MindForge is an innovative learning platform designed to help learners gain industry-relevant skills. 
          Our mission is to make education accessible, engaging, and impactful.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-heading">What We Offer</h2>
        <ul className="about-list">
          <li><strong>📚 Expert-Led Courses</strong> → Learn from professionals with real-world experience.</li>
          <li><strong>🛠️ Hands-On Learning</strong> → Interactive lessons, quizzes, and projects.</li>
          <li><strong>🚀 Career Growth</strong> → Gain skills that help you advance in your career.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="section-heading">Why Choose MindForge?</h2>
        <div className="about-grid">
          <div className="about-card">✔ High-Quality Content</div>
          <div className="about-card">✔ Learn at Your Own Pace</div>
          <div className="about-card">✔ Supportive Community</div>
        </div>
      </div>

      <div className="about-footer">
        <h2 className="join-heading">Join Us Today!</h2>
        <p className="about-text">Start your learning journey and unlock new opportunities. 🚀</p>
      </div>
    </div>
  );
};

export default About;
