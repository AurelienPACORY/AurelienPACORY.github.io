import { motion } from 'framer-motion';
import { Briefcase, Wifi, Users, Phone, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { EXPERIENCES } from '../utils/constants';
import { Card } from './ui/Card';

const iconMap = {
    Wifi: Wifi,
    Users: Users,
    Phone: Phone,
    Shield: Shield,
  };

export const Experiences = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });

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
            <span className="text-sm font-medium">Expériences</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Mes Expériences Professionnelles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et mes stages
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-12">
            {EXPERIENCES.map((exp, index) => (
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
                                {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full object-contain bg-background" />}
                                <h3 className="text-2xl font-bold">{exp.company}</h3>
                                <p className="text-muted-foreground">{exp.location}</p>
                                <p className="text-sm text-luxury-accent font-semibold mt-2">{exp.year}</p>
                            </div>
                            {/* Details */}
                            <div className="md:w-3/4">
                                <h4 className="text-xl font-semibold mb-4">{exp.title}</h4>
                                <p className="text-muted-foreground mb-6">{exp.summary}</p>

                                {exp.missions.length > 0 && (
                                    <div className="mb-6">
                                        <h5 className="font-semibold mb-3">Missions principales :</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {exp.missions.map((mission, i) => {
                                                const Icon = iconMap[mission.icon as keyof typeof iconMap] || Briefcase;
                                                return(
                                                    <div key={i} className="flex items-start gap-3">
                                                        <Icon className="w-5 h-5 text-luxury-accent mt-1 flex-shrink-0" />
                                                        <div>
                                                            <h6 className="font-semibold">{mission.category}</h6>
                                                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                                                {mission.tasks.map((task, j) => (
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
                                        <h5 className="font-semibold mb-3">Compétences mobilisées :</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
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