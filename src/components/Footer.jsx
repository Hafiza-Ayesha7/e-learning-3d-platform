import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>🎓 E-Learn 3D</h3>
          <p>Interactive 3D visualization platform for modern education.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/gallery">3D Gallery</Link>
        </div>

        <div className="footer-newsletter">
          <h4>Subscribe to Updates</h4>
          <p>Get latest updates on new 3D learning modules.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Learning 3D Platform. All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a> • <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;