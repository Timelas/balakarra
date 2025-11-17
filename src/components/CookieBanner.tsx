import { motion } from 'motion/react';

interface CookieBannerProps {
  onAccept: () => void;
}

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 20 }}
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 md:left-auto md:right-6 md:max-w-lg z-50"
    >
      <div className="bg-white border-4 sm:border-8 border-black p-6 sm:p-8 shadow-2xl transform rotate-1">
        <div className="mb-4 sm:mb-6">
          <div className="inline-block px-3 sm:px-4 py-2 bg-emerald-600 text-white border-4 border-black transform -rotate-2 mb-3 sm:mb-4">
            <span className="text-lg sm:text-2xl" style={{ fontWeight: 900 }}>🍪 COOKIES</span>
          </div>
          
          <p className="text-base sm:text-lg">
            Мы используем cookies для улучшения работы сайта. Продолжая использование, вы соглашаетесь с политикой cookies.
          </p>
        </div>
        
        <div className="flex gap-3 sm:gap-4">
          <motion.button
            onClick={onAccept}
            className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-black text-emerald-600 border-4 border-black text-base sm:text-xl relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-emerald-600"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors" style={{ fontWeight: 900 }}>
              ПРИНЯТЬ
            </span>
          </motion.button>
          
          <motion.button
            onClick={onAccept}
            className="px-4 sm:px-6 py-3 sm:py-4 border-4 border-black text-lg sm:text-xl"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}