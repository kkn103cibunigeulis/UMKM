import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { description: 'Traditional Indonesian village ceremony with people in traditional clothing', alt: 'Upacara Adat Desa' },
    { description: 'Indonesian farmers working in terraced rice fields', alt: 'Aktivitas Pertanian' },
    { description: 'Local market in Indonesian village with colorful products', alt: 'Pasar Tradisional' },
    { description: 'Community gathering in Indonesian village hall', alt: 'Kegiatan Masyarakat' },
    { description: 'Beautiful sunrise over Indonesian village with mountains', alt: 'Pemandangan Desa' },
    { description: 'Traditional Indonesian handicraft workshop', alt: 'Kerajinan Tangan Lokal' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Galeri Desa</h2>
          <p className="text-lg text-gray-600">Dokumentasi kegiatan dan keindahan Desa Cibunigeulis</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1592177183170-a4256e44e072" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-semibold">{galleryImages[currentIndex].alt}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-green-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-green-700" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-600 w-8' : 'bg-green-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;