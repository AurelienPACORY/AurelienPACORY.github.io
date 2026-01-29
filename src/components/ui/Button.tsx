import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'icon';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const variants = {
    primary: 'bg-gradient-to-r from-luxury-accent via-luxury-accent2 to-luxury-accent bg-[length:200%_100%] hover:bg-[length:100%_100%] text-primary-foreground glow-effect btn-magnetic',
    secondary: 'glass-strong text-foreground hover:bg-white/10 magnetic-hover',
    ghost: 'text-luxury-accent hover:text-luxury-accent2 magnetic-hover',
  };

  const sizes = {
    default: 'px-8 py-4',
    icon: 'h-10 w-10',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      className={`
        rounded-2xl font-semibold
        transition-all duration-500
        relative overflow-hidden
        inline-flex items-center justify-center
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
