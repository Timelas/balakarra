import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="text-4xl sm:text-6xl text-emerald-600" style={{ fontWeight: 900 }}>
                  БЛАКАРРА
                </span>
              </div>
              <div className="space-y-2 sm:space-y-3 text-white">
                <p className="text-lg sm:text-xl">ООО БЛАКАРРА</p>
                <p className="text-sm sm:text-base">ИНН: 9727116815</p>
                <p className="text-xs sm:text-sm opacity-60">
                  117041, г. Москва,<br />
                  Бартеневская ул, д. 49 к. 2, кв. 44
                </p>
                <p className="text-emerald-600 text-sm sm:text-base break-all">albinatuzhik1995z@rambler.ru</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <motion.button
                onClick={() => setShowPrivacy(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black border-4 border-white text-left text-base sm:text-xl transform hover:rotate-1 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </motion.button>
              
              <motion.button
                onClick={() => setShowTerms(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-sky-600 text-white border-4 border-sky-600 text-left text-base sm:text-xl transform hover:-rotate-1 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
              </motion.button>

              <div className="px-6 sm:px-8 py-3 sm:py-4 border-4 border-emerald-600 text-emerald-600 text-base sm:text-xl transform rotate-1">
                РАБОТАЕМ В НОВОСИБИРСКЕ
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t-4 border-white/20">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2025 ООО БЛАКАРРА. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="bg-white border-4 sm:border-8 border-black max-w-3xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="p-6 sm:p-8 pb-4 sm:pb-6 flex items-start justify-between border-b-4 border-black flex-shrink-0">
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white border-4 border-black transform -rotate-1">
                <h2 className="text-2xl sm:text-4xl" style={{ fontWeight: 900 }}>
                  ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                </h2>
              </div>
              
              <motion.button
                onClick={() => setShowPrivacy(false)}
                className="ml-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black text-emerald-600 border-4 border-black hover:bg-emerald-600 hover:text-white transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8 pt-6 sm:pt-8">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                <p>
                  ООО БЛАКАРРА (далее — «Компания») обязуется защищать конфиденциальность посетителей сайта.
                </p>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-emerald-600">
                    1. СБОР ИНФОРМАЦИИ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Мы собираем информацию, которую вы предоставляете при заполнении форм на сайте: имя, email, номер телефона.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-emerald-600">
                    2. ИСПОЛЬЗОВАНИЕ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Собранная информация используется для связи с вами, обработки запросов и предоставления услуг.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-emerald-600">
                    3. ЗАЩИТА ДАННЫХ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Мы применяем необходимые технические и организационные меры для защиты ваших персональных данных.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-emerald-600">
                    4. COOKIES
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Сайт использует cookies для улучшения работы и анализа посещаемости.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-emerald-600">
                    5. КОНТАКТЫ
                  </h3>
                  <p className="mt-3 sm:mt-4 break-all">
                    По вопросам обработки данных: albinatuzhik1995z@rambler.ru
                  </p>
                </div>

                <p className="text-xs sm:text-sm opacity-60 mt-6 sm:mt-8">
                  Обновлено: 17.11.2025
                </p>
              </div>
            </div>

            {/* Footer button */}
            <div className="p-6 sm:p-8 pt-4 sm:pt-6 border-t-4 border-black flex-shrink-0">
              <motion.button
                onClick={() => setShowPrivacy(false)}
                className="px-8 sm:px-12 py-3 sm:py-4 bg-black text-emerald-600 border-4 border-black w-full text-lg sm:text-xl"
                whileHover={{ scale: 1.02, backgroundColor: '#059669', color: '#fff' }}
              >
                ЗАКРЫТЬ
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTerms(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="bg-white border-4 sm:border-8 border-black max-w-3xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="p-6 sm:p-8 pb-4 sm:pb-6 flex items-start justify-between border-b-4 border-black flex-shrink-0">
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-sky-600 text-white border-4 border-black transform rotate-1">
                <h2 className="text-2xl sm:text-4xl" style={{ fontWeight: 900 }}>
                  ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                </h2>
              </div>
              
              <motion.button
                onClick={() => setShowTerms(false)}
                className="ml-4 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black text-sky-600 border-4 border-black hover:bg-sky-600 hover:text-white transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-8 pt-6 sm:pt-8">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                <p>
                  Настоящее Пользовательское соглашение регулирует отношения между ООО БЛАКАРРА и пользователями сайта.
                </p>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-sky-600">
                    1. ОБЩИЕ ПОЛОЖЕНИЯ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Используя сайт, вы соглашаетесь с условиями настоящего соглашения.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-sky-600">
                    2. УСЛУГИ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Компания предоставляет услуги по подбору персонала для ресторанной сферы.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-sky-600">
                    3. ОТВЕТСТВЕННОСТЬ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Компания не несёт ответственности за косвенные убытки.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-sky-600">
                    4. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ
                  </h3>
                  <p className="mt-3 sm:mt-4">
                    Все материалы сайта защищены авторским правом.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 inline-block px-3 sm:px-4 py-1 sm:py-2 bg-black text-sky-600">
                    5. РЕКВИЗИТЫ
                  </h3>
                  <p className="mt-3 sm:mt-4 break-all">
                    ООО БЛАКАРРА<br />
                    ИНН: 9727116815<br />
                    117041, г. Москва, Бартеневская ул, д. 49 к. 2, кв. 44<br />
                    albinatuzhik1995z@rambler.ru
                  </p>
                </div>

                <p className="text-xs sm:text-sm opacity-60 mt-6 sm:mt-8">
                  Обновлено: 17.11.2025
                </p>
              </div>
            </div>

            {/* Footer button */}
            <div className="p-6 sm:p-8 pt-4 sm:pt-6 border-t-4 border-black flex-shrink-0">
              <motion.button
                onClick={() => setShowTerms(false)}
                className="px-8 sm:px-12 py-3 sm:py-4 bg-black text-sky-600 border-4 border-black w-full text-lg sm:text-xl"
                whileHover={{ scale: 1.02, backgroundColor: '#0284c7', color: '#fff' }}
              >
                ЗАКРЫТЬ
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}