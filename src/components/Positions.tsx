import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const positions = [
  { title: 'ПОВАР\nХОЛОДНОГО\nЦЕХА', color: 'bg-sky-600 text-white', rotation: 'rotate-2' },
  { title: 'ПОВАР\nГОРЯЧЕГО\nЦЕХА', color: 'bg-emerald-600 text-white', rotation: '-rotate-1' },
  { title: 'ПОВАР\nУНИВЕРСАЛ', color: 'bg-white border-8 border-black', rotation: 'rotate-1' },
  { title: 'СУ-ШЕФ', color: 'bg-black text-emerald-600', rotation: '-rotate-2' },
  { title: 'ОФИЦИАНТ', color: 'bg-emerald-600 text-white', rotation: 'rotate-1' },
  { title: 'ХОСТЕС', color: 'bg-sky-600 text-white', rotation: '-rotate-1' },
  { title: 'УБОРЩИЦА', color: 'bg-white border-8 border-black', rotation: 'rotate-2' },
  { title: 'КЛАДОВЩИК', color: 'bg-emerald-600 text-white', rotation: '-rotate-1' },
  { title: 'ОХРАННИК', color: 'bg-black text-sky-600', rotation: 'rotate-1' },
  { title: 'БАРМЕН', color: 'bg-sky-600 text-white', rotation: '-rotate-2' },
  { title: 'АДМИНИ-\nСТРАТОР', color: 'bg-emerald-600 text-white', rotation: 'rotate-1' },
];

export function Positions() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Duplicate positions for infinite scroll
  const duplicatedPositions = [...positions, ...positions, ...positions];

  useEffect(() => {
    // Set initial scroll position to middle set
    if (scrollRef.current) {
      const cardWidth = 288 + 24; // 72 * 4 (w-72) + gap
      scrollRef.current.scrollLeft = cardWidth * positions.length;
    }
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = 288 + 24;
      const maxScroll = scrollWidth - clientWidth;
      
      // Reset position for infinite scroll
      if (scrollLeft <= cardWidth) {
        scrollRef.current.scrollLeft = scrollLeft + cardWidth * positions.length;
      } else if (scrollLeft >= maxScroll - cardWidth) {
        scrollRef.current.scrollLeft = scrollLeft - cardWidth * positions.length;
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="positions" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #fff 2px, transparent 2px),
            linear-gradient(to bottom, #fff 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 text-white transform -rotate-2">
              <span className="text-lg sm:text-2xl tracking-wider">АКТУАЛЬНЫЕ</span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white ml-6 sm:ml-12" style={{ fontWeight: 900 }}>
              ВАКАНСИИ
            </h2>
            <div className="px-6 sm:px-8 py-3 sm:py-4 bg-sky-600 text-white transform rotate-1 ml-12 sm:ml-24">
              <span className="text-sm sm:text-base lg:text-xl tracking-wider">ДЛЯ РЕСТОРАНОВ НОВОСИБИРСКА</span>
            </div>
          </div>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="mb-8 sm:mb-12">
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            onScroll={checkScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedPositions.map((position, index) => (
              <motion.div
                key={`${position.title}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: (index % positions.length) * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="snap-start flex-shrink-0"
              >
                <div className={`
                  w-64 sm:w-72 h-72 sm:h-80 p-8 sm:p-10 flex items-center justify-center text-center
                  ${position.color} transform ${position.rotation}
                  cursor-pointer transition-all duration-300
                  hover:shadow-2xl
                `}>
                  <h3 className="text-3xl sm:text-4xl leading-tight whitespace-pre-line break-words" style={{ fontWeight: 900 }}>
                    {position.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation arrows below slider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => scroll('left')}
              className="flex w-16 h-16 bg-emerald-600 border-4 border-black items-center justify-center hover:bg-sky-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center text-emerald-600 text-xs sm:text-sm tracking-widest"
            >
              ← ПРОКРУТИТЕ →
            </motion.div>

            <motion.button
              onClick={() => scroll('right')}
              className="flex w-16 h-16 bg-emerald-600 border-4 border-black items-center justify-center hover:bg-sky-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </motion.button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white text-lg sm:text-xl mb-6 sm:mb-8 px-4">
            НЕ НАШЛИ НУЖНУЮ ПОЗИЦИЮ? МЫ НАЙДЁМ ЛЮБОГО СПЕЦИАЛИСТА!
          </p>
          <motion.a
            href="#contact"
            className="group inline-block px-8 sm:px-12 py-4 sm:py-6 bg-emerald-600 text-white border-4 border-emerald-600 text-lg sm:text-xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-sky-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10" style={{ fontWeight: 900 }}>
              ОСТАВИТЬ ЗАЯВКУ
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}