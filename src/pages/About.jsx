import React from 'react';
import { Target, Eye, Box, Monitor, HelpCircle, Users } from 'lucide-react';

const stats = [
  { id: 1, value: '10,000+', label: 'Active Students' },
  { id: 2, value: '50+', label: 'Interactive 3D Models' },
  { id: 3, value: '98%', label: 'Course Success Rate' },
  { id: 4, value: '25+', label: 'Expert Instructors' }
];

const team = [
  { name: 'Dr. Sarah Ahmed', title: 'Head of Spatial Learning', avatar: '👩‍🏫' },
  { name: 'Zaid Mansoor', title: 'Lead 3D Graphics Engineer', avatar: '👨‍💻' },
  { name: 'Fatima Malik', title: 'Curriculum Director', avatar: '👩‍💼' }
];

function About() {
  return (
    <div className="page-container">
      <div className="section-title">
        <h1>About Us</h1>
        <p>We are revolutionizing education through 3D visualization and spatial tools.</p>
      </div>

      {/* Stats Counter Section */}
      <div className="stats-grid">
        {stats.map(s => (
          <div key={s.id} className="stat-card">
            <h2>{s.value}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid-2-col section-block">
        <div className="info-card">
          <Target size={36} />
          <h3>Our Mission</h3>
          <p>To make complex science, engineering, and medical concepts easy to understand by providing immersive, interactive 3D visualizations directly in the browser.</p>
        </div>
        <div className="info-card">
          <Eye size={36} />
          <h3>Our Vision</h3>
          <p>To lead the future of digital education where static textbooks are replaced with interactive, real-time spatial learning environments for everyone globally.</p>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="section-block">
        <div className="section-title">
          <h2>Key Platform Features</h2>
        </div>
        <div className="features-section">
          <div className="feature-card">
            <Box size={40} />
            <h3>Real-time 3D Manipulation</h3>
            <p>Rotate, dissect, and examine high-fidelity models with smooth WebGL rendering.</p>
          </div>
          <div className="feature-card">
            <Monitor size={40} />
            <h3>Cross-Platform Support</h3>
            <p>Access your 3D learning environment seamlessly on Desktop, Tablets, and Mobile.</p>
          </div>
          <div className="feature-card">
            <HelpCircle size={40} />
            <h3>Interactive 3D Quizzes</h3>
            <p>Test your knowledge by identifying and selecting correct parts on live 3D models.</p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="section-block">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>The visionaries building the future of 3D learning</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar-circle">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="team-socials">
                <a href="#linkedin">LinkedIn</a> • <a href="#github">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;