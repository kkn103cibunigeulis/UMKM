import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-600 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Selamat Datang di Desa Cibunigeulis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
          >
            Desa yang indah dengan potensi UMKM yang berkembang pesat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <img alt="Pemandangan Desa Cibunigeulis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1689772059376-12798517e0fa" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;