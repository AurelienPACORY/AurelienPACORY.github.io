import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  closeLabel?: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, closeLabel = 'Close', children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative glass-strong rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute top-4 right-4 z-10 glass-strong rounded-full p-2 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
