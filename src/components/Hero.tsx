import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../utils/constants';

export const Hero = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-accent rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-accent2 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-luxury-accent" />
            <span className="text-sm font-medium">{t('hero.badge')}</span>
          </motion.div>

          {/* Main Title */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="overflow-hidden"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 leading-tight">
                {t('hero.greeting')}{' '}
                <span className="gradient-text block mt-2">
                  {t('hero.name')}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block"
            >
              <div className="glass-strong px-8 py-4 rounded-2xl">
                <p className="text-xl md:text-2xl font-semibold text-foreground/90">
                  {t('hero.title')}
                </p>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-accent via-luxury-accent2 to-luxury-accent3 rounded-2xl blur opacity-30 -z-10" />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: t('hero.description') }} // Use dangerouslySetInnerHTML for HTML in description
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.view_projects')}
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
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-4 justify-center"
          >
            {[
              { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
              { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-14 h-14 glass-strong rounded-2xl flex items-center justify-center hover:glow-effect transition-all duration-300 group"
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-luxury-accent transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-muted-foreground font-medium">{t('hero.scroll_down')}</span>
          <ArrowDown className="w-5 h-5 text-luxury-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
