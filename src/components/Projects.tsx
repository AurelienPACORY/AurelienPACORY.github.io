import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Github } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PROJECTS } from '../utils/constants';

export const Projects = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const [filter, setFilter] = useState('Tous');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const categories = ['Tous', 'Réseaux', 'Systèmes', 'Développement'];

  const filteredProjects = filter === 'Tous'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <FolderGit2 className="w-5 h-5 text-luxury-accent" />
            <span className="text-sm font-medium">Réalisations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations techniques et innovations
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${filter === category
                  ? 'bg-gradient-to-r from-luxury-accent to-luxury-accent2 text-primary-foreground glow-effect'
                  : 'glass text-muted-foreground hover:text-foreground hover:glass-strong'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden card-hover h-full flex flex-col">
                {/* Project Image/Visual */}
                <div className="relative h-56 bg-gradient-to-br from-luxury-accent/20 to-luxury-accent2/20 overflow-hidden">
                  <div className="absolute inset-0 mesh-gradient opacity-50" />

                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-8xl font-display font-bold text-foreground/10">
                      {String(project.id).padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 glass-strong px-4 py-2 rounded-full">
                    <span className="text-xs font-semibold text-luxury-accent">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 text-sm font-medium text-luxury-accent hover:text-luxury-accent2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 text-sm font-medium text-luxury-accent hover:text-luxury-accent2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass inline-block px-8 py-4 rounded-2xl">
            <span className="text-luxury-accent font-semibold">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché{filteredProjects.length > 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};