import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const glitchAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

export function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const title = 'БЛАКАРРА';

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-50">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Neon shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-sky-600 rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 sm:mb-12">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <div className="px-4 sm:px-6 py-2 bg-black text-emerald-600 border-4 border-black transform -rotate-1 inline-block">
              <span className="tracking-wider text-sm sm:text-base">КАДРОВОЕ АГЕНТСТВО</span>
            </div>
          </motion.div>

          {/* Main title with glitch */}
          <motion.h1
            variants={glitchAnimation}
            initial="hidden"
            animate="visible"
            className="relative mb-8 sm:mb-12"
          >
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className={`text-6xl sm:text-8xl lg:text-9xl xl:text-[12rem] inline-block ${
                    glitch ? 'text-emerald-600' : 'text-black'
                  } transition-colors duration-100`}
                  style={{
                    fontWeight: 900,
                    textShadow: glitch ? '5px 5px 0 #0284c7, -5px -5px 0 #059669' : 'none',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        {/* Subtitle in boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-black text-white transform rotate-1">
              <span className="text-base sm:text-xl">ПОДБОР</span>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-emerald-600 text-white transform -rotate-2">
              <span className="text-base sm:text-xl">ПЕРСОНАЛА</span>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-sky-600 text-white transform rotate-1">
              <span className="text-base sm:text-xl">ДЛЯ РЕСТОРАНОВ</span>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-4 border-black text-black transform -rotate-1">
              <span className="text-base sm:text-xl">НОВОСИБИРСК</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          <motion.a
            href="#positions"
            className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-black text-emerald-600 border-4 border-black overflow-hidden text-lg sm:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-emerald-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors">
              ВАКАНСИИ →
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative px-8 sm:px-12 py-4 sm:py-6 border-4 border-black text-black overflow-hidden text-lg sm:text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-sky-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors">СВЯЗАТЬСЯ</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs tracking-widest">SCROLL</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}