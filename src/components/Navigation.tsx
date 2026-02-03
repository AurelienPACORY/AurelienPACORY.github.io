import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from './ui/ThemeSwitcher';
import { LanguageSwitcher } from './ui/LanguageSwitcher';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  const menuItems = [
    { name: t('navigation.about'), href: '#hero' },
    { name: t('navigation.formations'), href: '#cv' },
    { name: t('navigation.projects'), href: '#projects' },
    { name: t('navigation.experiences'), href: '#experiences' },
    { name: t('navigation.contact'), href: '#contact' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${isScrolled ? 'glass-strong py-4' : 'py-6'}
      `}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-baseline justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="text-2xl md:text-3xl font-display font-bold gradient-text">
              Aurélien Pacory
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-luxury-accent to-luxury-accent2"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-baseline gap-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="
                  px-6 py-3 rounded-xl
                  text-foreground/80 hover:text-foreground
                  font-medium
                  relative group
                  transition-all duration-300
                "
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 glass rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right-side controls */}
          <div className="hidden md:flex items-baseline gap-4">
            <motion.a
              href="#contact"
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r from-luxury-accent to-luxury-accent2
                  text-primary-foreground font-semibold
                  glow-effect
                  relative overflow-hidden
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('navigation.contact_me')}
              </motion.div>
            </motion.a>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-strong p-3 rounded-xl"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-6 space-y-3"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="
                  block px-6 py-4 rounded-xl
                  glass-strong
                  text-foreground/80 hover:text-foreground
                  font-medium
                  transition-all duration-300
                "
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: menuItems.length * 0.05 }}
              className="
                block px-6 py-4 rounded-xl
                bg-gradient-to-r from-luxury-accent to-luxury-accent2
                text-primary-foreground font-semibold text-center
              "
            >
              {t('navigation.contact_me')}
            </motion.a>
            <div className="flex justify-center pt-4 gap-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
