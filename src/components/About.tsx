import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { number: '500+', label: 'ЗАКРЫТО', sublabel: 'ВАКАНСИЙ' },
  { number: '200+', label: 'КЛИЕНТОВ', sublabel: 'ДОВЕРЯЮТ' },
  { number: '24/7', label: 'НА СВЯЗИ', sublabel: 'ВСЕГДА' },
];

const features = [
  'БЫСТРЫЙ ПОДБОР',
  'ПРОВЕРЕННЫЕ КАДРЫ',
  'ГАРАНТИЯ КАЧЕСТВА',
  'БЕЗ ПОСРЕДНИКОВ',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 sm:w-32 h-20 sm:h-32 border-4 sm:border-8 border-emerald-600 transform rotate-12" />
      <div className="absolute bottom-40 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-sky-600 transform -rotate-6" />
      
      {/* Background image */}
      <div className="absolute top-1/2 right-10 w-64 h-64 opacity-20 transform rotate-6 hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1658921034679-0d9e999ddc43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzNzQwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional chef"
          className="w-full h-full object-cover border-8 border-black"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 relative inline-block">
            <span className="relative z-10">ПОЧЕМУ</span>
            <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 sm:h-8 bg-emerald-600 -z-10 transform -rotate-1" />
          </h2>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl ml-6 sm:ml-12">
            <span className="relative z-10">МЫ?</span>
          </h2>
        </motion.div>

        {/* Stats Grid - Asymmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 sm:p-12 border-4 sm:border-8 border-black transform ${
                index === 0 ? 'rotate-2 bg-emerald-600 text-white' :
                index === 1 ? '-rotate-1 bg-sky-600 text-white' :
                'rotate-1 bg-white'
              } ${index === 1 ? 'sm:mt-12' : ''}`}
            >
              <div className="text-4xl sm:text-6xl mb-2 sm:mb-4" style={{ fontWeight: 900 }}>
                {stat.number}
              </div>
              <div className="text-xl sm:text-2xl tracking-wider">{stat.label}</div>
              <div className="text-lg sm:text-xl opacity-60">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                className="group cursor-pointer"
              >
                <div className="p-6 sm:p-8 bg-black text-emerald-600 border-4 border-black relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-emerald-600"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-lg sm:text-2xl tracking-wider group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional decorative image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 flex justify-center"
          >
            <div className="w-full max-w-2xl h-64 sm:h-80 relative transform rotate-1 border-8 border-black overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762015669851-4098e655ec87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwc3RhZmYlMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzM3NDAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant staff"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-xl sm:text-2xl" style={{ fontWeight: 900 }}>
                  ПРОФЕССИОНАЛЬНАЯ КОМАНДА — УСПЕХ ВАШЕГО РЕСТОРАНА
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}