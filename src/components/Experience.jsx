import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';
import { FiMapPin, FiCalendar, FiBriefcase, FiCheck } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">My Journey</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            3.2+ years of building quality engineering solutions across Healthcare and Enterprise environments
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline" ref={ref}>
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.18, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Timeline Node */}
              <div className="timeline-node">
                <motion.div
                  className="node-circle"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.18 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  <FiBriefcase />
                </motion.div>
                {i < experience.length - 1 && <div className="node-line" />}
              </div>

              {/* Content Card */}
              <motion.div
                className="timeline-card card"
                whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
              >
                {/* Header Row */}
                <div className="exp-header">
                  <div className="exp-header-left">
                    <span className={`exp-type-badge exp-type-${job.type.replace('-', '').toLowerCase()}`}>
                      {job.type}
                    </span>
                    <h3 className="exp-role">{job.role}</h3>
                    <div className="exp-company gradient-text">{job.company}</div>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-meta-item">
                      <FiCalendar />
                      <span>{job.period}</span>
                    </div>
                    <div className="exp-meta-item">
                      <FiMapPin />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{job.description}</p>

                {/* Achievements */}
                <div className="exp-achievements">
                  <div className="achievements-title">Key Achievements</div>
                  <ul className="achievements-list">
                    {job.achievements.map((a, ai) => (
                      <motion.li
                        key={ai}
                        className="achievement-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.18 + 0.3 + ai * 0.04 }}
                      >
                        <span className="achievement-icon"><FiCheck /></span>
                        <span>{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="exp-tech">
                  {job.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
