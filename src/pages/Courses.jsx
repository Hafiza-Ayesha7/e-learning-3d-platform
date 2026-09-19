import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

const coursesData = [
  { id: 1, title: '3D Human Anatomy & Physiology', category: 'Medical', level: 'Beginner', rating: 4.9, students: '2.4k', duration: '6 Hours', icon: '🧠' },
  { id: 2, title: 'Interactive Physics & Dynamics', category: 'Science', level: 'Intermediate', rating: 4.8, students: '1.8k', duration: '8 Hours', icon: '⚛️' },
  { id: 3, title: 'Architectural 3D Modeling & CAD', category: 'Architecture', level: 'Advanced', rating: 4.9, students: '3.1k', duration: '12 Hours', icon: '🏛️' },
  { id: 4, title: 'Solar System & Planetary Orbits', category: 'Astronomy', level: 'Beginner', rating: 4.7, students: '1.2k', duration: '4 Hours', icon: '🪐' },
  { id: 5, title: 'Mechanical Engine Components in 3D', category: 'Engineering', level: 'Intermediate', rating: 4.9, students: '2.9k', duration: '10 Hours', icon: '⚙️' },
  { id: 6, title: 'Organic Chemistry 3D Structures', category: 'Science', level: 'Advanced', rating: 4.6, students: '950', duration: '5 Hours', icon: '🧪' }
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Medical', 'Science', 'Architecture', 'Engineering', 'Astronomy'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container">
      <div className="section-title">
        <h1>Explore 3D Courses</h1>
        <p>Browse our interactive catalog of 3D visual learning modules.</p>
      </div>

      {/* Filter & Search Bar */}
      <div className="search-filter-wrapper">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>

        <div className="category-pills">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-preview-box">
              <span className="course-emoji">{course.icon}</span>
              <span className="badge">{course.level}</span>
            </div>
            <div className="course-body">
              <div className="course-info">
                <span className="category-tag">{course.category}</span>
                <h3>{course.title}</h3>
                <div className="course-meta">
                  <span><Star size={16} className="star-icon" /> {course.rating}</span>
                  <span>👥 {course.students}</span>
                  <span>⏱️ {course.duration}</span>
                </div>
              </div>
              <button className="btn-primary full-width">Start Learning</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="pagination-box">
        <button className="btn-secondary">Load More Courses</button>
      </div>
    </div>
  );
}

export default Courses;