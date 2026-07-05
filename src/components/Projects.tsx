import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, FolderGit2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Modal } from './ui/Modal';

export const Projects = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const { t } = useTranslation();

  const categories = (t('projects.categories', { returnObjects: true }) || []) as Array<string>;
  const projectsData = (t('projects.list', { returnObjects: true }) || []) as Array<any>;

  const [filterIndex, setFilterIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects = filterIndex === 0
    ? (Array.isArray(projectsData) ? projectsData : [])
    : (Array.isArray(projectsData) ? projectsData.filter(p => p.category === categories[filterIndex]) : []);

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
            <span className="text-sm font-medium">{t('projects.section_title')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('projects.main_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.main_description')}
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
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilterIndex(index)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${filterIndex === index
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
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="glass rounded-3xl overflow-hidden card-hover h-full flex flex-col cursor-pointer"
              >
                {/* Project Image/Visual */}
                <div className="relative h-56 bg-gradient-to-br from-luxury-accent/20 to-luxury-accent2/20 overflow-hidden">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      animate={{
                        scale: hoveredId === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
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
                    </>
                  )}

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
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View details hint */}
                  <div className="flex items-center gap-2 text-sm font-medium text-luxury-accent group-hover:gap-3 transition-all">
                    {t('projects.view_details')}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        closeLabel={t('projects.close')}
      >
        {selectedProject && (
          <>
            <div className="relative h-64 md:h-[28rem] w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-luxury-accent/20 to-luxury-accent2/20">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              ) : (
                <>
                  <div className="absolute inset-0 mesh-gradient opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-display font-bold text-foreground/10">
                      {String(selectedProject.id).padStart(2, '0')}
                    </div>
                  </div>
                </>
              )}
              <div className="absolute top-4 left-4 glass-strong px-4 py-2 rounded-full">
                <span className="text-xs font-semibold text-luxury-accent">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 gradient-text">
                {selectedProject.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {selectedProject.long_description || selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 glass rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {selectedProject.skills_used?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-luxury-accent uppercase tracking-wide mb-3">
                    {t('projects.skills_used_title')}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.skills_used.map((skill: string, skillIndex: number) => (
                      <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent mt-2 shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.skills_acquired?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-luxury-accent2 uppercase tracking-wide mb-3">
                    {t('projects.skills_acquired_title')}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.skills_acquired.map((skill: string, skillIndex: number) => (
                      <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent2 mt-2 shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedProject.deliverables?.length > 0 || selectedProject.gallery?.length > 0 || selectedProject.pdf) && (
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                    {t('projects.deliverables_title')}
                  </h4>

                  {selectedProject.deliverables?.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {selectedProject.deliverables.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <FileText className="w-4 h-4 text-luxury-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {selectedProject.gallery?.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      {selectedProject.gallery.map((img: { src: string; caption?: string }, imgIndex: number) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden glass">
                          <img src={img.src} alt={img.caption || selectedProject.title} className="w-full h-72 md:h-96 object-contain bg-black/20 p-3" />
                          {img.caption && (
                            <p className="text-xs text-muted-foreground p-2">{img.caption}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedProject.pdf && (
                    <a
                      href={selectedProject.pdf.url}
                      download
                      className="inline-flex items-center gap-2 text-sm font-medium text-luxury-accent hover:text-luxury-accent2 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {selectedProject.pdf.label}
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};