import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const contactDetails = [
  { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#7c3aed' },
  { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#06b6d4' },
  { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null, color: '#ec4899' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/muthukumar', href: personalInfo.github, color: '#f59e0b' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/muthukumar', href: personalInfo.linkedin, color: '#22c55e' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send
    await new Promise(r => setTimeout(r, 1500));
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, or just a great conversation about QA & automation
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-intro">
              <h3>Let's build something together!</h3>
              <p>
                Whether you're looking for a skilled QA Automation Engineer, want to discuss testing strategies,
                or explore opportunities — I'd love to hear from you.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="contact-detail-card card"
                  style={{ '--detail-color': c.color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <span className="detail-icon" style={{ background: `${c.color}1a`, color: c.color }}>
                    {c.icon}
                  </span>
                  <div>
                    <div className="detail-label">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="detail-value link">
                        {c.value}
                      </a>
                    ) : (
                      <div className="detail-value">{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              className="availability-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Currently Available</div>
                <div className="avail-text">
                  Open to Full-time, Contract, and Freelance QA roles
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="form-input form-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className={`btn btn-primary form-submit ${status === 'sent' ? 'sent' : ''}`}
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'idle' ? 1.03 : 1 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'idle' && <><FiSend /> Send Message</>}
                {status === 'sending' && <><span className="spinner" /> Sending...</>}
                {status === 'sent' && <><FiCheck /> Message Sent!</>}
                {status === 'error' && 'Try Again'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
