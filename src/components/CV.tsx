import { motion } from 'framer-motion';
import { Award, Download, TrendingUp, Languages as LanguagesIcon, Heart, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const CV = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const { t } = useTranslation();

  const timelineData = t('cv.timeline', { returnObjects: true }) as Array<any>;
  const languagesData = t('cv.languages', { returnObjects: true }) as Array<any>;
  const hobbiesData = t('cv.hobbies', { returnObjects: true }) as Array<any>;
  const softSkillsData = t('cv.soft_skills', { returnObjects: true }) as Array<string>;
  const skillsData = t('cv.skills.list', { returnObjects: true }) as Array<any>;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="cv" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-luxury-accent" />
            <span className="text-sm font-medium">{t('cv.section_title')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('cv.main_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('cv.main_description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Column 1: Formation & Langues & Savoir-être */}
          <div className="space-y-12">
            {/* Formation */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-gradient-to-b from-luxury-accent to-luxury-accent2 rounded-full" />
                {t('cv.education_title')}
              </motion.h3>
              <div className="space-y-6">
                {timelineData.map((timeline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-accent via-luxury-accent2 to-transparent" />
                    <div className="absolute left-0 top-2 w-3 h-3 bg-luxury-accent rounded-full ring-4 ring-background -translate-x-[5px]" />
                    <Card hover={false} className="group">
                      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-start">
                        {timeline.logo && (
                          <img src={timeline.logo} alt={`${timeline.title} logo`} className="w-24 h-24 mx-auto md:mx-0 rounded-full object-contain bg-background" />
                        )}
                        <div className={!timeline.logo ? 'md:col-span-2' : ''}>
                          <div className="text-sm text-luxury-accent font-semibold mb-2">{timeline.year}</div>
                          <h4 className="text-xl font-display font-semibold mb-2 group-hover:gradient-text transition-all">{timeline.title}</h4>
                          <p className="text-muted-foreground mb-2">{timeline.institution}</p>
                          <p className="text-muted-foreground/80 text-sm">{timeline.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-gradient-to-b from-luxury-accent to-luxury-accent2 rounded-full" />
                {t('cv.languages_title')}
              </motion.h3>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                {languagesData.map((lang) => (
                  <motion.div key={lang.name} variants={item}>
                    <Card hover={false}>
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{lang.flag}</span>
                        <div>
                          <h4 className="font-semibold">{lang.name}</h4>
                          <p className="text-muted-foreground">{lang.level}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Savoir-être */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-gradient-to-b from-luxury-accent to-luxury-accent2 rounded-full" />
                {t('cv.soft_skills_title')}
              </motion.h3>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card hover={false}>
                  <div className="grid grid-cols-2 gap-3">
                    {softSkillsData.map((skill) => (
                      <motion.span key={skill} variants={item} className="glass-strong text-sm font-medium px-4 py-2 rounded-full text-center">
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Compétences */}
          <div className="space-y-12">
            {/* Compétences */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
              >
                <div className="w-2 h-8 bg-gradient-to-b from-luxury-accent to-luxury-accent2 rounded-full" />
                {t('cv.skills_title')}
              </motion.h3>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
                {skillsData.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card hover={false} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-luxury-accent" />
                          <span className="font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-luxury-accent font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-luxury-accent to-luxury-accent2 rounded-full"
                        />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{skill.category}</div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Passions */}
        <div className="mb-16">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-3 justify-center"
            >
                <div className="w-2 h-8 bg-gradient-to-b from-luxury-accent to-luxury-accent2 rounded-full" />
                {t('cv.passions_title')}
            </motion.h3>
            <motion.div 
              variants={container} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true }} 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {hobbiesData.map((hobby) => (
                    <motion.div key={hobby.title} variants={item}>
                        <Card>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl mb-4">{hobby.icon}</span>
                                <h4 className="font-semibold mb-2">{hobby.title}</h4>
                                <p className="text-muted-foreground text-sm">{hobby.description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>


        {/* Download CV */}
        <motion.div
          id="download-cv-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center scroll-mt-24"
        >
          <Button asChild className="inline-flex items-center gap-3">
            <a href="/CV-Aurélien-PACORY.pdf" download="CV-Aurélien-PACORY.pdf">
              <Download className="w-5 h-5" />
              {t('cv.download_cv')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};