import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import './Skills.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level" style={{ color }}>{level}%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">What I Know</div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I've mastered through years of hands-on experience
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {skills.map((cat, i) => (
            <motion.button
              key={cat.category}
              className={`skill-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={activeTab === i ? { '--tab-color': cat.color } : {}}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
              {activeTab === i && (
                <motion.div className="tab-indicator" layoutId="tab-indicator" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-content"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skills-grid">
              {/* Progress Bars */}
              <div className="skills-bars card">
                <div className="card-header">
                  <span style={{ fontSize: '2rem' }}>{skills[activeTab].icon}</span>
                  <div>
                    <h3 style={{ color: skills[activeTab].color }}>{skills[activeTab].category}</h3>
                    <p className="card-desc">Proficiency levels based on hands-on experience</p>
                  </div>
                </div>
                <div className="skill-bars-list">
                  {skills[activeTab].items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skills[activeTab].color}
                      inView={inView}
                      delay={0.1 + i * 0.1}
                    />
                  ))}
                </div>
              </div>

              {/* Skill Cards */}
              <motion.div
                className="skill-cards-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {skills[activeTab].items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card card"
                    variants={cardVariants}
                    whileHover={{ scale: 1.04, y: -4 }}
                    style={{ '--card-color': skills[activeTab].color }}
                  >
                    <div className="skill-card-name">{skill.name}</div>
                    <div className="skill-card-level">
                      {skill.level >= 90 ? '🔥 Expert' :
                       skill.level >= 80 ? '⭐ Advanced' :
                       skill.level >= 70 ? '✅ Intermediate' : '📚 Learning'}
                    </div>
                    <div className="skill-card-bar">
                      <motion.div
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${skills[activeTab].color}80, ${skills[activeTab].color})`,
                          height: '3px',
                          borderRadius: '2px',
                          transition: 'width 1.2s ease',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Skills Cloud */}
        <motion.div
          className="skills-cloud"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="cloud-title">All Technologies</h3>
          <div className="cloud-tags">
            {skills.flatMap(cat =>
              cat.items.map(skill => (
                <motion.span
                  key={`${cat.category}-${skill.name}`}
                  className="cloud-tag"
                  style={{ '--tag-color': cat.color }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
