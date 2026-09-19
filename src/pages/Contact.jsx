import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: "System requirements for 3D canvas?", a: "Any modern web browser with WebGL support (Chrome, Firefox, Edge, Safari) on PC or mobile." },
  { q: "Is the platform free to use?", a: "Yes! We offer a free tier with access to core 3D models and introductory courses." },
  { q: "Can I embed 3D models into my own website?", a: "Yes, our interactive course viewer supports iframe embedding for educational partners." }
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-container">
      <div className="section-title">
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with our team.</p>
      </div>

      <div className="grid-2-col contact-layout">
        {/* Contact Form */}
        <div className="form-card">
          <h2>Send a Message</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Course Support</option>
                <option>3D Model Issue</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button className="btn-primary full-width">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>

        {/* Info Cards Panel */}
        <div className="info-side-panel">
          <div className="contact-info-card">
            <Mail size={28} />
            <div>
              <h3>Email Us</h3>
              <p>support@elearn3d.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <Phone size={28} />
            <div>
              <h3>Call / WhatsApp</h3>
              <p>+1 (555) 019-2834</p>
            </div>
          </div>

          <div className="contact-info-card">
            <MapPin size={28} />
            <div>
              <h3>Office Location</h3>
              <p>100 Innovation Way, Tech District</p>
            </div>
          </div>

          <div className="social-links-box">
            <h4>Follow Us</h4>
            <div className="social-tags">
              <span>Twitter</span> • <span>LinkedIn</span> • <span>YouTube</span> • <span>Discord</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="section-block faq-section">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq.q}</span>
                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === index && <div className="faq-answer"><p>{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;