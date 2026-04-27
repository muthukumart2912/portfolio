import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">MK</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Software Engineer · ISTQB Certified · Aspiring SDET
            </p>
            <p className="footer-bio">
              Passionate about building quality into every layer of software development through
              robust automation frameworks and AI-assisted testing.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <button
                    className="footer-link"
                    onClick={() => {
                      const id = l.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-tech">
            <h4 className="footer-section-title">Core Technologies</h4>
            <div className="footer-tech-tags">
              {['Java', 'Playwright', 'Selenium', 'Cucumber', 'TestNG', 'REST Assured', 'JMeter', 'Jenkins', 'GitHub Actions', 'OpenText ALM'].map(t => (
                <span key={t} className="footer-tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Muthu Kumar. Built with{' '}
            <FiHeart className="heart-icon" /> using React & Framer Motion
          </p>
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
