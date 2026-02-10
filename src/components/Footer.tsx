import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold gradient-text mb-4"
        >
          Aurélien Pacory
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          <span>© {new Date().getFullYear()} - {t('footer.copyright_name')}</span>
        </motion.div>

        {/* Additional Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-luxury-accent transition-colors"
          >
            {t('footer.back_to_top')}
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
