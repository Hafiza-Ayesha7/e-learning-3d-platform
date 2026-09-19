import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Moon, Sun } from 'lucide-react';

function Navbar({ onOpenLogin, onOpenSignUp }) {
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode Toggle Logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <GraduationCap size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
          <span>E-Learn 3D</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Action Buttons */}
      <div className="nav-actions">
        <button 
          className="theme-toggle-btn" 
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle Light/Dark Theme"
        >
          {darkMode ? <Sun size={20} color="#f59e0b" /> : <Moon size={20} />}
        </button>
        
        <button className="btn-secondary" onClick={onOpenLogin}>
          Login
        </button>
        
        <button className="btn-primary" onClick={onOpenSignUp}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;