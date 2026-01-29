import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={hover ? { y: -8 } : {}}
      className={`
        glass rounded-3xl p-8
        ${hover ? 'card-hover' : ''}
        noise-texture
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
