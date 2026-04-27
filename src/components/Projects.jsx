import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FiGithub, FiExternalLink, FiStar, FiClock, FiGlobe } from 'react-icons/fi';
import './Projects.css';

const categories = ['All', ...new Set(projects.map(p => p.category))];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const categoryColors = {
  Healthcare: '#7c3aed',
  Tools: '#ec4899',
  API: '#f59e0b',
  AI: '#22c55e',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featured = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">What I've Built</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of automation frameworks, tools, and engineering solutions built from real-world experience
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={activeCategory === cat && cat !== 'All' ? {
                '--filter-color': categoryColors[cat],
              } : {}}
            >
              {cat}
              <span className="filter-count">
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Banner (shown when All) */}
        {activeCategory === 'All' && (
          <motion.div
            className="featured-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="featured-label">
              <FiStar /> Flagship Projects
            </div>
            <div className="featured-grid">
              {featured.map(project => (
                <FeaturedCard
                  key={project.id}
                  project={project}
                  color={categoryColors[project.category]}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="all-projects-label">
          {activeCategory === 'All' ? 'All Projects' : `${activeCategory} Projects`}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                color={categoryColors[project.category]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeaturedCard({ project, color }) {
  return (
    <motion.div
      className="featured-card"
      style={{ '--card-color': color }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      <div className="featured-card-bg"
        style={{ background: `linear-gradient(135deg, ${color}20 0%, transparent 60%)` }}
      />
      <div className="featured-card-content">
        <div className="featured-card-top">
          <span className="project-category-badge"
            style={{ color, background: `${color}1a`, border: `1px solid ${color}33` }}
          >
            {project.category}
          </span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <FiGithub />
            </a>
          )}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Domain & Duration */}
        <div className="project-meta-row">
          <div className="project-meta-item">
            <FiGlobe style={{ color }} />
            <span>{project.domain}</span>
          </div>
          <div className="project-meta-item">
            <FiClock style={{ color }} />
            <span>{project.duration}</span>
          </div>
        </div>

        <div className="project-stats">
          {Object.entries(project.stats).map(([k, v]) => (
            <div key={k} className="project-stat">
              <span className="stat-val" style={{ color }}>{v}</span>
              <span className="stat-key">{k}</span>
            </div>
          ))}
        </div>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, color }) {
  return (
    <motion.div
      className="project-card card"
      style={{ '--card-color': color }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <div className="project-card-top">
        <span
          className="project-category-badge"
          style={{ color, background: `${color}1a`, border: `1px solid ${color}33` }}
        >
          {project.category}
        </span>
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.15 }}
          >
            <FiGithub />
          </motion.a>
        )}
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="project-meta-row">
        {project.domain && (
          <div className="project-meta-item">
            <FiGlobe style={{ color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem' }}>{project.domain}</span>
          </div>
        )}
      </div>

      <div className="project-mini-stats">
        {Object.entries(project.stats).slice(0, 2).map(([k, v]) => (
          <div key={k} className="mini-stat">
            <span style={{ color, fontWeight: 700 }}>{v}</span>
            <span> {k}</span>
          </div>
        ))}
      </div>

      <div className="project-tags">
        {project.tags.slice(0, 4).map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}
