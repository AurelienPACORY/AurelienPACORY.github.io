import { motion } from 'framer-motion';
import { Briefcase, Wifi, Users, Phone, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Card } from './ui/Card';

const iconMap = {
    Wifi: Wifi,
    Users: Users,
    Phone: Phone,
    Shield: Shield,
  };

export const Experiences = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const { t } = useTranslation();

  const experiencesData = t('experiences.list', { returnObjects: true }) as Array<any>;

  return (
    <section id="experiences" ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Briefcase className="w-5 h-5 text-luxury-accent" />
            <span className="text-sm font-medium">{t('experiences.section_title')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('experiences.main_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experiences.main_description')}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-12">
            {experiencesData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                    <Card>
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Logo and Company Info */}
                            <div className="md:w-1/4 text-center md:text-left">
                                {exp.logo && (
                                  <div className="relative inline-block mb-6 group/logo">
                                    <div className="absolute inset-0 bg-luxury-accent/20 blur-2xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                                    <div className="relative w-28 h-28 mx-auto md:mx-0 rounded-3xl glass-strong p-4 flex items-center justify-center border border-white/10 shadow-2xl transform group-hover/logo:scale-105 transition-transform duration-500">
                                      <img 
                                        src={exp.logo} 
                                        alt={`${exp.company} logo`} 
                                        className="w-full h-full object-contain filter drop-shadow-sm" 
                                      />
                                    </div>
                                  </div>
                                )}
                                <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                                <p className="text-muted-foreground text-sm mb-3">{exp.location}</p>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-luxury-accent/10 text-luxury-accent text-xs font-bold border border-luxury-accent/20">
                                  {exp.year}
                                </span>
                            </div>
                            {/* Details */}
                            <div className="md:w-3/4">
                                <h4 className="text-xl font-semibold mb-4">{exp.title}</h4>
                                <p className="text-muted-foreground mb-6">{exp.summary}</p>

                                {exp.missions.length > 0 && (
                                    <div className="mb-6">
                                        <h5 className="font-semibold mb-3">{t('experiences.missions_title')}</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {exp.missions.map((mission: any, i: number) => {
                                                const Icon = iconMap[mission.icon as keyof typeof iconMap] || Briefcase;
                                                return(
                                                    <div key={i} className="flex items-start gap-3">
                                                        <Icon className="w-5 h-5 text-luxury-accent mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h6 className="font-semibold">{mission.category}</h6>
                                                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                                {mission.tasks.map((task: string, j: number) => (
                                                                    <li key={j}>{task}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                                
                                {exp.skills.length > 0 && (
                                    <div>
                                        <h5 className="font-semibold mb-3">{t('experiences.skills_mobilized')}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill: string, i: number) => (
                                                <span key={i} className="glass-strong text-xs font-medium px-3 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};