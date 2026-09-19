import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import AuthModal from './components/AuthModal'
import './App.css'

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openLogin = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
  };

  const openSignUp = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  return (
    <div className="app-container">
      <Navbar onOpenLogin={openLogin} onOpenSignUp={openSignUp} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenSignUp={openSignUp} />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Auth Modal Component Render */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialMode={authMode} 
      />
    </div>
  )
}

export default App