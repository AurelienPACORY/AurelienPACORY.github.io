import { motion } from 'framer-motion';
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../utils/constants';

export const About = () => {
  const { ref } = useScrollAnimation({ triggerOnce: true });
  const { t } = useTranslation();

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-luxury-accent" />
            <span className="text-sm font-medium">{t('about.section_title')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            {t('about.main_title')}
          </h2>
        </motion.div>

        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-block">
            <div className="glass-strong px-8 py-4 rounded-2xl">
              <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                {t('about.role_title')}
              </p>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-accent via-luxury-accent2 to-luxury-accent3 rounded-2xl blur opacity-30 -z-10" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: t('about.description') }}
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('about.view_projects')}
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('navigation.contact_me')}
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          {[
            { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
            { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center hover:glow-effect transition-all duration-300 group"
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-luxury-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
