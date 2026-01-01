import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';

const Navbar = ({ onAdminClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-700 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-700 font-bold text-xl">C</span>
            </div>
            <span className="text-white font-bold text-xl">Desa Cibunigeulis</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('profile')}
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Profil Desa
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection('umkm')}
              className="text-white hover:text-green-200 transition-colors font-medium"
            >
              UMKM
            </button>
            <button
              onClick={onAdminClick}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-green-800"
        >
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-green-200 transition-colors font-medium py-2"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('profile')}
              className="block w-full text-left text-white hover:text-green-200 transition-colors font-medium py-2"
            >
              Profil Desa
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-white hover:text-green-200 transition-colors font-medium py-2"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection('umkm')}
              className="block w-full text-left text-white hover:text-green-200 transition-colors font-medium py-2"
            >
              UMKM
            </button>
            <button
              onClick={() => {
                onAdminClick();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-all w-full"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;