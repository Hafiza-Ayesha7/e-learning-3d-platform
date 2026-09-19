import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

function AuthModal({ isOpen, onClose, initialMode = 'login', onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Browser refresh hone se rokta hai

    // Basic Validation Check
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      alert('Karam karke tamam fields fill karein!');
      return;
    }

    // Mock Authentication Logic
    const user = {
      name: isLogin ? formData.email.split('@')[0] : formData.name,
      email: formData.email
    };

    // LocalStorage me Auth Session Save Karein
    localStorage.setItem('user', JSON.stringify(user));

    if (onLoginSuccess) {
      onLoginSuccess(user);
    }

    // Form reset aur Modal Close karein
    setFormData({ name: '', email: '', password: '' });
    onClose();

    // Successful Auth ke baad Courses page par navigate karein
    navigate('/courses');
  };

  return (
    <div className="modal-overlay" style={styles.overlay}>
      <div className="modal-content" style={styles.content}>
        <button onClick={onClose} style={styles.closeBtn}><X size={20} /></button>
        
        <h2>{isLogin ? 'Login to E-Learn 3D' : 'Create an Account'}</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              value={formData.name} 
              onChange={handleChange} 
              style={styles.input}
              required 
            />
          )}
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            style={styles.input}
            required 
          />
          
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            style={styles.input}
            required 
          />

          <button type="submit" className="btn-primary full-width" style={{ marginTop: '1rem' }}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
          {isLogin ? "Account nahi hai? " : "Pehle se account hai? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: '#8b5cf6', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  content: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '400px',
    position: 'relative',
    color: '#333'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  }
};

export default AuthModal;