import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    { label: 'КОМПАНИЯ', value: 'ООО БЛАКАРРА' },
    { label: 'ИНН', value: '9727116815' },
    { label: 'ГОРОД', value: 'НОВОСИБИРСК' },
    { label: 'EMAIL', value: 'albinatuzhik1995z@rambler.ru' },
    { label: 'АДРЕС', value: '117041, Москва,\nБартеневская ул, д. 49 к. 2, кв. 44' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-600 transform rotate-45 opacity-20" />
      <div className="absolute bottom-20 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-sky-600 transform -rotate-12 opacity-20" />
      
      {/* Background images */}
      <div className="absolute top-20 left-10 w-56 h-56 opacity-15 transform -rotate-6 hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1657593088889-5105c637f2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkaW5pbmd8ZW58MXx8fHwxNzYzMzMxNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Restaurant interior"
          className="w-full h-full object-cover border-8 border-black"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6" style={{ fontWeight: 900 }}>
            КОНТАКТЫ
          </h2>
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-emerald-600 transform -rotate-1">
            <span className="text-base sm:text-xl tracking-wider">СВЯЗАТЬСЯ ПРЯМО СЕЙЧАС</span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info - Stacked boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, rotate: index % 2 === 0 ? 1 : -1 }}
                className={`
                  p-6 sm:p-8 border-4 border-black transform
                  ${index % 3 === 0 ? 'bg-emerald-600 text-white rotate-1' :
                    index % 3 === 1 ? 'bg-sky-600 text-white -rotate-1' :
                    'bg-white rotate-1'}
                `}
              >
                <div className="text-xs sm:text-sm tracking-widest opacity-60 mb-2">{info.label}</div>
                <div className="text-lg sm:text-xl lg:text-2xl whitespace-pre-line break-all" style={{ fontWeight: 700 }}>
                  {info.value}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              СВЯЖИТЕСЬ С НАМИ ПО EMAIL ИЛИ ОСТАВЬТЕ ЗАЯВКУ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                href="mailto:albinatuzhik1995z@rambler.ru"
                className="group inline-block px-8 sm:px-12 py-4 sm:py-6 bg-black text-emerald-600 border-4 border-black text-lg sm:text-xl relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors" style={{ fontWeight: 900 }}>
                  НАПИСАТЬ EMAIL
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}