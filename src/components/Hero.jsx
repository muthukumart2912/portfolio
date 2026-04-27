import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, stats } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import './Hero.css';

const socialLinks = [
  { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section id="home" className="hero">
      <ParticlesBackground />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      <div className="container">
        <div className="hero-layout">
          {/* ===== LEFT: Text Content ===== */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="badge-dot" />
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="hero-name">
              Hi, I'm{' '}
              <span className="name-highlight">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="hero-typing">
              <TypeAnimation
                sequence={personalInfo.taglines.flatMap(t => [t, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="hero-bio">
              {personalInfo.bio}
            </motion.p>

            {/* Certifications inline */}
            <motion.div variants={itemVariants} className="hero-certs">
              <span className="cert-pill">🏅 ISTQB Foundation Level Certified</span>
              <span className="cert-pill">☁️ Oracle OCI 2023 Associate</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-cta">
              <motion.button
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.a
                className="btn btn-outline"
                href={personalInfo.resumeLink}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="hero-social">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="hero-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-value gradient-text">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Professional Photo ===== */}
          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="hero-photo-frame">
              {/* Spinning gradient border */}
              <div className="photo-ring-outer" />
              <div className="photo-ring-inner" />

              {/* Floating badges */}
              <motion.div
                className="photo-badge photo-badge-top"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <span>🏅</span>
                <span>ISTQB Certified</span>
              </motion.div>

              <motion.div
                className="photo-badge photo-badge-bottom"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <span>⚡</span>
                <span>3.2+ Yrs Exp</span>
              </motion.div>

              {/* Actual Photo */}
              <div className="hero-photo-wrapper">
                <img
                  src="/muthu_professional.png"
                  alt="Muthu Kumar – QA Automation Engineer in black blazer"
                  className="hero-photo-img"
                />
                {/* Glow overlay */}
                <div className="photo-glow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <FiArrowDown />
        <span>Scroll Down</span>
      </motion.button>
    </section>
  );
}
