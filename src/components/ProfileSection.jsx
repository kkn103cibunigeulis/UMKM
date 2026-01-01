import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building2, Leaf } from 'lucide-react';

const ProfileSection = () => {
  const stats = [
    { icon: Users, label: 'Penduduk', value: '5,234 Jiwa' },
    { icon: Building2, label: 'UMKM', value: '87 Unit' },
    { icon: Leaf, label: 'Lahan Pertanian', value: '450 Ha' },
    { icon: MapPin, label: 'Luas Wilayah', value: '12.5 km²' }
  ];

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Profil Desa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desa Cibunigeulis adalah desa yang terletak di wilayah pegunungan dengan kekayaan alam yang melimpah
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-12 h-12 text-green-600 mb-4" />
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-green-800">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">Sejarah Desa</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Desa Cibunigeulis memiliki sejarah panjang yang dimulai sejak zaman kolonial. Nama Cibunigeulis berasal dari bahasa Sunda yang berarti "air yang jernih dan indah", mengacu pada sumber air bersih yang melimpah di wilayah ini.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Masyarakat desa sebagian besar bermata pencaharian sebagai petani dan pelaku UMKM. Dengan perkembangan zaman, Desa Cibunigeulis terus berinovasi dalam mengembangkan potensi lokal untuk kesejahteraan masyarakat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;