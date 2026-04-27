import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, education, certifications } from '../data/portfolioData';
import { FiMapPin, FiMail, FiPhone, FiDownload, FiBook, FiAward } from 'react-icons/fi';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    { icon: <FiMapPin />, label: 'Location', value: personalInfo.location },
    { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ];

  const highlights = [
    { label: 'Specialization', value: 'QA Automation & SDET', icon: '🎯' },
    { label: 'Certified', value: 'ISTQB Foundation Level', icon: '🏅' },
    { label: 'Domain', value: 'Healthcare / LIMS', icon: '🏥' },
    { label: 'AI Testing', value: 'Copilot + Playwright MCP', icon: '🤖' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="section-label">Who I Am</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate QA Engineer dedicated to building quality into every stage of software development
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Avatar Card */}
          <motion.div
            className="about-avatar-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-image">
                <img
                  src="/muthu_professional.png"
                  alt="Muthu Kumar – QA Automation Engineer"
                  className="avatar-photo"
                />
              </div>
              <div className="avatar-badge">
                <span>3.2+</span>
                <span className="badge-label">Years Exp.</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="highlights-grid">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="highlight-card card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <div className="highlight-value">{h.value}</div>
                    <div className="highlight-label">{h.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="about-info-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <h3 className="about-heading">
              Ensuring <span className="gradient-text">Software Quality</span> at Scale
            </h3>
            <p className="about-text">
              I'm a Software Engineer with <strong>3.2+ years of experience</strong> in software testing, specialising in test automation using <strong>Java, Playwright, Selenium, TestNG, and REST Assured</strong>. I've built automation frameworks from scratch across UI, API, and integration layers.
            </p>
            <p className="about-text">
              I've worked in the <strong>Healthcare / Life Sciences</strong> domain on Labware LIMS 7 (CLIA & CRS modules), eliminating manual bottlenecks, building parallel execution frameworks, and integrating CI/CD pipelines with GitHub Actions and Jenkins.
            </p>
            <p className="about-text">
              I'm passionate about leveraging cutting-edge tools like <strong>Playwright MCP Server + GitHub Copilot</strong> for AI-assisted test generation, and I believe quality engineering is a first-class engineering discipline.
            </p>

            {/* Contact Info */}
            <div className="contact-info">
              {contactInfo.map((c) => (
                <div key={c.label} className="contact-item">
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="contact-value link">{c.value}</a>
                    ) : (
                      <div className="contact-value">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="education-block">
              <div className="block-header">
                <FiBook /> <span>Education</span>
              </div>
              {education.map((ed) => (
                <div key={ed.degree} className="edu-card card">
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-institution">{ed.institution}</div>
                  <div className="edu-meta">
                    <span>{ed.period}</span>
                    <span className="tag">{ed.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="education-block">
              <div className="block-header">
                <FiAward /> <span>Certifications</span>
              </div>
              <div className="cert-cards">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    className="cert-card card"
                    whileHover={{ scale: 1.02, borderColor: cert.color }}
                    style={{ '--cert-color': cert.color }}
                  >
                    <span className="cert-icon">{cert.icon}</span>
                    <div>
                      <div className="cert-name">{cert.name}</div>
                      <div className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              className="btn btn-primary"
              href={personalInfo.resumeLink}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{ width: 'fit-content' }}
            >
              <FiDownload /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
