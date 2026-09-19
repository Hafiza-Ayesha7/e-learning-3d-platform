import React from 'react';
import { Link } from 'react-router-dom';
import Canvas3DHero from '../components/Canvas3DHero';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Star, 
  ArrowRight, 
  MousePointerClick, 
  CheckCircle,
  Clock
} from 'lucide-react';

const featuredCourses = [
  { id: 1, title: '3D Human Anatomy', category: 'Medical', level: 'Beginner', rating: '4.9', duration: '6 Hours', icon: '🧠', ariaLabel: 'Brain emoji' },
  { id: 2, title: 'Interactive Physics Engine', category: 'Science', level: 'Intermediate', rating: '4.8', duration: '8 Hours', icon: '⚛️', ariaLabel: 'Atom emoji' },
  { id: 3, title: '3D Architectural Design', category: 'Art & Design', level: 'Advanced', rating: '4.9', duration: '12 Hours', icon: '🏛️', ariaLabel: 'Classical building emoji' }
];

const testimonials = [
  { id: 1, name: 'Ayesha Khan', role: 'Medical Student', comment: '3D canvas se anatomy concepts samajhna bohot aasan ho gaya hai! Visualizing body systems in 3D is unbelievable.' },
  { id: 2, name: 'Ali Raza', role: 'Engineering Student', comment: 'The interactive 3D physics models helped me understand spatial mechanics faster than traditional books.' },
  { id: 3, name: 'Saba Ahmed', role: 'High School Educator', comment: 'My students love learning through interactive 3D models. Engagement levels have skyrocketed.' }
];

function Home({ onOpenSignUp }) {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to 3D E-Learning Platform</h1>
        <p>Explore interactive 3D courses and modern spatial learning experiences.</p>
        
        {/* Call to Action Buttons */}
        <div className="cta-group">
          <Link to="/courses" className="btn-primary btn-lg">
            Explore Courses <ArrowRight size={18} />
          </Link>
          <button onClick={onOpenSignUp} className="btn-secondary btn-lg">Get Started</button>
        </div>

        <Canvas3DHero />
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="feature-card">
          <GraduationCap size={40} />
          <h3>Expert Tutors</h3>
          <p>Learn from top industry professionals and 3D modeling experts.</p>
        </div>
        <div className="feature-card">
          <BookOpen size={40} />
          <h3>Interactive Courses</h3>
          <p>Manipulate and examine real-time 3D models in your browser.</p>
        </div>
        <div className="feature-card">
          <Award size={40} />
          <h3>Certifications</h3>
          <p>Earn verified skill certificates upon course completion.</p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-block">
        <div className="section-title">
          <h2>Featured 3D Courses</h2>
          <p>Start with our top-rated interactive learning experiences</p>
        </div>
        <div className="courses-grid">
          {featuredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-preview-box">
                <span className="course-emoji" role="img" aria-label={course.ariaLabel}>{course.icon}</span>
                <span className="badge">{course.level}</span>
              </div>
              <div className="course-body">
                <span className="category-tag">{course.category}</span>
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span><Star size={16} className="star-icon" /> {course.rating}</span>
                  <span><Clock size={16} /> {course.duration}</span>
                </div>
                <button className="btn-primary full-width">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-block how-it-works">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Simple 3-step journey to master spatial concepts</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <BookOpen size={32} />
            <h3>Pick a Course</h3>
            <p>Choose from dozens of interactive subjects tailored to your field.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <MousePointerClick size={32} />
            <h3>Interact in 3D</h3>
            <p>Rotate, zoom, explode, and examine 3D models in real-time.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <CheckCircle size={32} />
            <h3>Get Certified</h3>
            <p>Complete interactive 3D quizzes and receive accredited certificates.</p>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section className="section-block">
        <div className="section-title">
          <h2>What Our Students Say</h2>
          <p>Real feedback from learners worldwide</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(item => (
            <div key={item.id} className="testimonial-card">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="comment">"{item.comment}"</p>
              <div className="user-info">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;