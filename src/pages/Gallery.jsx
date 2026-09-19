import React, { useState } from 'react';
import { Upload, Eye, X } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Beating Heart Model', category: 'Anatomy', author: 'Dr. John', icon: '❤️' },
  { id: 2, title: 'V8 Engine Block', category: 'Mechanical', author: 'Sara Tech', icon: '🚗' },
  { id: 3, title: 'Skyscraper Blueprint 3D', category: 'Architecture', author: 'BuildLab', icon: '🏙️' },
  { id: 4, title: 'Mars Rover Model', category: 'Astronomy', author: 'AstroDev', icon: '🚀' },
  { id: 5, title: 'Human Skull & Jaw', category: 'Anatomy', author: 'BioSpace', icon: '💀' },
  { id: 6, title: 'Wind Turbine Assembly', category: 'Mechanical', author: 'EcoEng', icon: '🌬️' }
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const categories = ['All', 'Anatomy', 'Mechanical', 'Architecture', 'Astronomy'];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="page-container">
      <div className="gallery-header">
        <div>
          <h1>3D Model Gallery</h1>
          <p>Explore student creations and public 3D interactive assets.</p>
        </div>
        <button className="btn-primary">
          <Upload size={18} /> Upload Your 3D Creation
        </button>
      </div>

      {/* Category Tabs */}
      <div className="category-pills" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive 3D Grid */}
      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="gallery-card" onClick={() => setActiveModal(item)}>
            <div className="gallery-preview">
              <span style={{ fontSize: '4rem' }}>{item.icon}</span>
              <div className="gallery-overlay">
                <Eye size={24} /> <span>Inspect 3D</span>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>By {item.author} • <span className="category-tag">{item.category}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* 3D Model Modal Popup */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveModal(null)}>
              <X size={20} />
            </button>
            <h2>{activeModal.title}</h2>
            <p>Created by {activeModal.author}</p>
            <div className="canvas-hero-container" style={{ margin: '1.5rem 0' }}>
              <span style={{ fontSize: '5rem' }}>{activeModal.icon}</span>
              <h3>Interactive 3D View Container</h3>
              <p>Drag to rotate • Scroll to zoom</p>
            </div>
            <button className="btn-primary" onClick={() => setActiveModal(null)}>Close Viewer</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;